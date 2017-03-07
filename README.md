# pySwitchLib


Install required packages:
```
    sudo pip install pyswitchlib
```


Inside a python program do this:
```
    import pyswitchlib.asset
```
## 0.1.40
* Added 16.1.1 and 17.1.1 to SLX
## 0.1.39
* Removed json output from main response object. get_dict_output() now converts xml response to json/dictionary.
* Added get_xml_output() method.

## 0.1.38
* Single entries for lldp 
## 0.1.37
* device was not closing the REST session 
## 0.1.35
* Removed delete APIs where YANG elements contain "cli-incomplete-no" extension.

## 0.1.34
* Fixed missing payload for default values.

## 0.1.33
* Fixed updating with default values.
## 0.1.32
* switchport_list corrected vlan entry for access

## 0.1.31
* interface_exists : checks for the presence of an interface

## 0.1.30
* Vrrpe Changes for ipv6

## 0.1.29
* Fix for show_arp for NOS/SLX
* VCS Nodes Listing is corrected for multiple nodes

## 0.1.28:
* Optimized firmware version fetch
* Fixed changes in Port Channel

## 0.1.26:
* Fixed VLAN issues in pyswitch_wrapper
* Fixed VRRPE issues in NOS
* Fixed key combination delimiter for REST URI formation of object instances.  Now uses '%2C' (comma) as the delimeter.
* Reverted REST session auth token code. REST requests will always authenticate.
* Updated dependency to a minimum version of pyangbind-brcd 0.6.12.
* Updated dependency to a minimum version of pybind 0.1.23.

## 0.1.25:
* Removed logging and logger from asset object.

## 0.1.24:
* Added leaf level delete APIs for containers and lists.
* Fixed leaf level update APIs where all other leaves under same container/list were incorrectly listed as kwargs to be updated.
* Updated requirements dependency on pybind module. Needs a minimum version of pybind 0.1.22.

## 0.1.20:
* Supported NOS Versions:
** nos6.0.2c (ga)
** nos7.0.1b (based on bld13)
* Added presence container create/delete support.  Specifically for rbridge-id router bgp enable/disable
* Added delete API counter parts for corresponding update APIs.
* Fixed xml payload formation for update operations.  Uses rest alt-name instead of yang name.
* Fixed IPv6 deletion issue.  REST URI formation in pyswitchlib was incorrect.  drop-node-names should only apply to containers.

## 0.1.19:
* get_dict_output() method added on asset object to easily access output response from last issued API.  Also YANG list elements will consistently be returned as a python list type regardless of single instance or multiple instances created
* Fixed out of order update for interface channel-groups api
* Added back missing RPCs.  Inadvertently removed when filtering out incorrect "output" input parameters for RPCs

## 0.1.18:
* Fixed source ip collision for ipv4/ipv6 acls
* Exposed update APIs for all interfaces at the list level
* Fixed boolean False issue

## 0.1.17:
* Added sphinx apidocs for pyswitchlib documentation generation.
* Organized API methods in separate files under api directory.
* Fixed missing kwargs for certain update API's.  Including interface_*_channel_group_update().
* Added workaround to detect SLX Fusion OS type. "show-firmware-rpc" in Fusion branch is returning "NOS" os type.
* Added tox framework (WIP)

## 0.1.16:
* Updated README.md with change information

## 0.1.15:
* Added persistent sessions for REST requests. Authentication Token renewed after 160 seconds between REST requests and in case of failed REST responses.
* Timeout kwarg added to asset and API's. Default asset timeout is 1800 seconds. API timeouts override asset timeout.
* Added get_os_type() and get_os_version() methods to asset object. 
* Request from BFO team
* RestInterfaceError expection raised when asset can connect to IP, but web server is not available. Request from BFO team.





