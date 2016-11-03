import pyswitchlib
import requests
import weakref
import re
import os
import xml.etree.ElementTree as ElementTree
import xmltodict
import json

class Asset(object):
    """
    This is an auto-generated class for the PySwitchLib device asset.
    Asset provides connection information for PySwitchLib APIs.    """


    def __init__(self, ip_addr='', auth=('admin', 'password'), fw_ver=''):
        self._ip_addr = ip_addr
        self._auth = auth
        self._os_type = 'nos'
        self._os_ver = fw_ver
        self._session = requests.Session()
        self._response = requests.Response()
        self._overall_success = True
        self._overall_status = []

        def on_deletion (killed_ref):
            self._session.close()

        self._weakref = weakref.ref(self, on_deletion)

        self._rest_config_path = '/rest/config/running'
        self._rest_operational_path = '/rest/operational-state'
        self._rest_rpc_path = '/rest/operational-state'
        self._rest_discover_path = '/rest'
        self._module_obj = None

        self._update_uri_prefix_paths()
        self._update_fw_version()
        self._supported_module_name = self._get_supported_module()
        #self._load_module(supported_module_name=self._supported_module_name)

        self._proxied = pyswitchlib.PySwitchLib(module_name=self._supported_module_name, module_obj=self._module_obj, rest_operation=self._rest_operation)

    def __getattr__(self, name):
        return getattr(self._proxied, name)

    def _rest_operation(self, rest_commands):
        header = {"Resource-Depth" : "2"}
        auth = self._auth
        del self._overall_status[:]

        response = self._response

        for rest_cmd in rest_commands:
            if len(rest_cmd) < 4:
                rest_cmd.append ("config")

            if rest_cmd[3] == "config":
                uri_prefix_path = self._rest_config_path
            elif rest_cmd[3] == "operational":
                uri_prefix_path = self._rest_operational_path
            elif rest_cmd[3] == "rpc":
                uri_prefix_path = self._rest_rpc_path
            elif rest_cmd[3] == "discover":
                uri_prefix_path = self._rest_discover_path

            url = "http://"+self._ip_addr+uri_prefix_path

            if rest_cmd[0] == "GET":
                self._response = self._session.get(url + rest_cmd[1], headers=header, auth=auth)
            elif rest_cmd[0] == "POST":
                self._response = self._session.post(url + rest_cmd[1], auth=auth, data=rest_cmd[2])
            elif rest_cmd[0] == "PUT":
                self._response = self._session.put(url + rest_cmd[1], auth=auth, data=rest_cmd[2])
            elif rest_cmd[0] == "PATCH":
                self._response = self._session.patch(url + rest_cmd[1], auth=auth, data=rest_cmd[2])
            elif rest_cmd[0] == "DELETE":
                self._response = self._session.delete(url + rest_cmd[1], auth=auth)

            json = ''

            if rest_cmd[3] == 'rpc' or rest_cmd[3] == 'operational' or rest_cmd[0] == 'GET' and (self._response.status_code >= 200 and self._response.status_code <= 299):
                if re.match('^<', self._response.text):
                    json = self._xml_to_json(self._response.text)
                else:
                    json = "{'error': " + self._response.text + "}"

            self._overall_status.append({self._ip_addr : {'request': {'op_code': rest_cmd[0], 'uri': rest_cmd[1], 'data': rest_cmd[2]}, 'response': {'status_code': self._response.status_code, 'url': self._response.url, 'text': self._response.text, 'json': json}}})

        return self._get_results()

    def _get_results(self):
        self._overall_success = True

        for status in self._overall_status:
            for key in status:
                if (status[key]['response']['status_code'] < 200) or (status[key]['response']['status_code'] > 299):
                    self._overall_success = False

        return self._overall_success, self._overall_status
    def _update_fw_version(self):
        rest_command = (
            ["POST", "/show-firmware-version", "", "rpc"],
        )

        self._rest_operation(rest_command)

        status, result = self._get_results()

        try:
            rest_root = ElementTree.fromstring(re.sub(' xmlns[^ \t\n\r\f\v>]+', '', result[0][self._ip_addr]['response']['text']))

            if rest_root.find('show-firmware-version').find('os-name') is not None:
                if 'Network Operating System' in rest_root.find('show-firmware-version').find('os-name').text:
                    self._os_type = 'nos'
                elif 'SLX' in rest_root.find('show-firmware-version').find('os-name').text:
                    self._os_type = 'slxos'

            if rest_root.find('show-firmware-version').find('os-version') is not None:
                self._os_ver = rest_root.find('show-firmware-version').find('os-version').text
        except:
            pass

    def _update_uri_prefix_paths(self):
        rest_command = (
            ["GET", "", "", "discover"],
        )

        self._rest_operation(rest_command)

        status, result = self._get_results()

        try:
            rest_root = ElementTree.fromstring(re.sub(' xmlns[^ \t\n\r\f\v>]+|y:', '', result[0][self._ip_addr]['response']['text']))

            if rest_root.find('config').find('running') is not None:
                self._rest_config_path = rest_root.find('config').find('running').get('self')

            if rest_root.find('operational-state') is not None:
                self._rest_rpc_path = rest_root.find('operational-state').get('self')
                self._rest_operational_path = rest_root.find('operational-state').get('self')

            if rest_root.find('operations') is not None:
                self._rest_rpc_path = rest_root.find('operations').get('self')
        except:
            pass

    def _xml_to_json(self, xml=''):
        return json.dumps(xmltodict.parse(xml))

    def _get_supported_module(self):
        pybind_dir = os.path.abspath('pybind' + os.sep + self._os_type)
        pybind_ver_tree = {}

        max_depth = 1
        cur_depth = pybind_dir.count(os.sep)
        max_os_walk_depth = cur_depth + max_depth

        for (dirpath, dirs, files) in os.walk(pybind_dir):
            if dirpath.count(os.sep) >= max_os_walk_depth:
                del dirs[:]

            submodule = dirpath.partition(pybind_dir)[2].lstrip('/').replace(os.sep, '.')

            if submodule:
                tuple = submodule.strip('v_').split('_')

                for index, elem in enumerate(tuple):
                    if index == 0:
                        if elem not in pybind_ver_tree:
                            pybind_ver_tree[elem] = {}
                    elif index == 1:
                        if elem not in pybind_ver_tree[tuple[0]]:
                            pybind_ver_tree[tuple[0]][elem] = {}
                    elif index == 2:
                        if elem not in pybind_ver_tree[tuple[0]][tuple[1]]:
                            pybind_ver_tree[tuple[0]][tuple[1]][elem] = {}
                    elif index == 3:
                        if elem not in pybind_ver_tree[tuple[0]][tuple[1]][tuple[2]]:
                            pybind_ver_tree[tuple[0]][tuple[1]][tuple[2]][elem] = {}

        os_version_tuple = self._os_ver.strip('.').split('.')
        supported_os_version = []

        if os_version_tuple[0] in pybind_ver_tree:
            supported_os_version.append(os_version_tuple[0])
        else:
            for major in sorted(pybind_ver_tree, reverse=True):
                if os_version_tuple[0] >= major:
                    supported_os_version.append(major)
                    break;

        if supported_os_version[0] == os_version_tuple[0] and os_version_tuple[1] in pybind_ver_tree[supported_os_version[0]]:
            supported_os_version.append(os_version_tuple[1])
        else:
            for minor in sorted(pybind_ver_tree[supported_os_version[0]], reverse=True):
                if supported_os_version[0] == os_version_tuple[0]:
                    if os_version_tuple[1] >= minor:
                        supported_os_version.append(minor)
                        break;
                else:
                    supported_os_version.append(minor)
                    break;

        if supported_os_version[0] == os_version_tuple[0] and supported_os_version[1] == os_version_tuple[1] and os_version_tuple[2] in pybind_ver_tree[supported_os_version[0]][supported_os_version[1]]:
            supported_os_version.append(os_version_tuple[2])
        else:
            for patch in sorted(pybind_ver_tree[supported_os_version[0]][supported_os_version[1]], reverse=True):
                if supported_os_version[0] == os_version_tuple[0] and supported_os_version[1] == os_version_tuple[1]:
                    if os_version_tuple[2] >= patch:
                        supported_os_version.append(patch)
                        break;
                else:
                    supported_os_version.append(patch)
                    break;

        safe_os_version = 'v'+'_'.join(supported_os_version)
        package_name = '.'.join(['pybind', self._os_type, safe_os_version])

        return package_name

    def _load_module(self, supported_module_name=''):
        if supported_module_name:
            self._module_obj =  __import__(supported_module_name, fromlist=['*'])

