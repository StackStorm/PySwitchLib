Search.setIndex({docnames:["index","modules","pyswitch","pyswitch.os","pyswitch.os.base","pyswitch.os.nos","pyswitch.os.nos.base","pyswitch.os.slxos","pyswitch.os.slxos.base"],envversion:52,filenames:["index.rst","modules.rst","pyswitch.rst","pyswitch.os.rst","pyswitch.os.base.rst","pyswitch.os.nos.rst","pyswitch.os.nos.base.rst","pyswitch.os.slxos.rst","pyswitch.os.slxos.base.rst"],objects:{"":{pyswitch:[2,0,0,"-"]},"pyswitch.device":{Device:[2,1,1,""],DeviceCommError:[2,4,1,""],Reply:[2,1,1,""]},"pyswitch.device.Device":{close:[2,2,1,""],find_interface_by_mac:[2,2,1,""],firmware_version:[2,3,1,""],mac_table:[2,3,1,""],os_type:[2,3,1,""],reconnect:[2,2,1,""],suports_rbridge:[2,3,1,""]},"pyswitch.os":{base:[4,0,0,"-"],nos:[5,0,0,"-"],slxos:[7,0,0,"-"]},"pyswitch.os.base":{"interface":[4,0,0,"-"],bgp:[4,0,0,"-"],fabric_service:[4,0,0,"-"],lldp:[4,0,0,"-"],services:[4,0,0,"-"],snmp:[4,0,0,"-"],system:[4,0,0,"-"],vcs:[4,0,0,"-"]},"pyswitch.os.base.bgp":{Bgp:[4,1,1,""]},"pyswitch.os.base.bgp.Bgp":{af_ip_allowas_in:[4,2,1,""],as4_capability:[4,2,1,""],bfd:[4,2,1,""],default_vrf_max_paths:[4,2,1,""],default_vrf_redistribute_connected:[4,2,1,""],default_vrf_unicast_address_family:[4,2,1,""],enable_peer_bfd:[4,2,1,""],enabled:[4,3,1,""],evpn_afi:[4,2,1,""],evpn_afi_peer_activate:[4,2,1,""],evpn_allowas_in:[4,2,1,""],evpn_graceful_restart:[4,2,1,""],evpn_next_hop_unchanged:[4,2,1,""],get_bgp_neighbors:[4,2,1,""],graceful_restart:[4,2,1,""],has_rbridge_id:[4,3,1,""],l2_mtu_const:[4,3,1,""],local_asn:[4,2,1,""],max_paths:[4,2,1,""],method_prefix:[4,2,1,""],multihop:[4,2,1,""],neighbor:[4,2,1,""],os:[4,3,1,""],peer_bfd_timers:[4,2,1,""],recursion:[4,2,1,""],redistribute:[4,2,1,""],remove_bgp:[4,2,1,""],retain_rt_all:[4,2,1,""],update_source:[4,2,1,""],valid_int_types:[4,3,1,""],valid_intp_types:[4,3,1,""],vni_add:[4,2,1,""],vrf_max_paths:[4,2,1,""],vrf_redistribute_connected:[4,2,1,""],vrf_unicast_address_family:[4,2,1,""]},"pyswitch.os.base.fabric_service":{FabricService:[4,1,1,""]},"pyswitch.os.base.fabric_service.FabricService":{trill_links:[4,3,1,""]},"pyswitch.os.base.interface":{Interface:[4,1,1,""]},"pyswitch.os.base.interface.Interface":{acc_vlan:[4,2,1,""],access_mode:[4,2,1,""],access_vlan:[4,2,1,""],add_int_vrf:[4,2,1,""],add_vlan_int:[4,2,1,""],admin_state:[4,2,1,""],anycast_mac:[4,2,1,""],arp_suppression:[4,2,1,""],bfd:[4,2,1,""],channel_group:[4,2,1,""],conversational_arp:[4,2,1,""],conversational_mac:[4,2,1,""],create_evpn_instance:[4,2,1,""],create_loopback:[4,2,1,""],create_portchannel:[4,2,1,""],create_ve:[4,2,1,""],del_access_vlan:[4,2,1,""],del_ip:[4,2,1,""],del_vlan_int:[4,2,1,""],description:[4,2,1,""],disable_switchport:[4,2,1,""],enable_switchport:[4,2,1,""],evpn_instance_duplicate_mac_timer:[4,2,1,""],evpn_instance_mac_timer_max_count:[4,2,1,""],evpn_instance_rd_auto:[4,2,1,""],evpn_instance_rt_both_ignore_as:[4,2,1,""],fabric_neighbor:[4,2,1,""],get_interface_detail_request:[4,5,1,""],get_interface_switchport_request:[4,5,1,""],get_ip_addresses:[4,2,1,""],get_node_value:[4,5,1,""],get_port_chann_detail_request:[4,5,1,""],get_vlan_brief_request:[4,5,1,""],get_vlan_int:[4,2,1,""],has_rbridge_id:[4,3,1,""],int_ipv4_arp_aging_timout:[4,2,1,""],interface_detail:[4,3,1,""],interface_exists:[4,2,1,""],interfaces:[4,3,1,""],ip_address:[4,2,1,""],ip_mtu:[4,2,1,""],ip_unnumbered:[4,2,1,""],ipv6_link_local:[4,2,1,""],l2_mtu_const:[4,3,1,""],lacp_timeout:[4,2,1,""],mac_move_detect_enable:[4,2,1,""],mac_move_limit:[4,2,1,""],method_prefix:[4,2,1,""],mtu:[4,2,1,""],overlay_gateway_activate:[4,2,1,""],overlay_gateway_attach_rbridge_id:[4,2,1,""],overlay_gateway_loopback_id:[4,2,1,""],overlay_gateway_name:[4,2,1,""],overlay_gateway_type:[4,2,1,""],overlay_gateway_vlan_vni_auto:[4,2,1,""],port_channel_minimum_links:[4,2,1,""],port_channel_speed:[4,2,1,""],port_channel_vlag_ignore_split:[4,2,1,""],port_channels:[4,3,1,""],private_vlan_mode:[4,2,1,""],private_vlan_type:[4,2,1,""],proxy_arp:[4,2,1,""],pvlan_host_association:[4,2,1,""],pvlan_trunk_association:[4,2,1,""],remove_port_channel:[4,2,1,""],set_ip:[4,2,1,""],single_interface_detail:[4,2,1,""],switchport:[4,2,1,""],switchport_list:[4,3,1,""],switchport_pvlan_mapping:[4,2,1,""],tag_native_vlan:[4,2,1,""],transport_service:[4,2,1,""],trunk_allowed_vlan:[4,2,1,""],trunk_mode:[4,2,1,""],v6_nd_suppress_ra:[4,2,1,""],valid_int_types:[4,3,1,""],valid_intp_types:[4,3,1,""],ve_interfaces:[4,2,1,""],vlan_pvlan_association_add:[4,2,1,""],vlans:[4,3,1,""],vrf:[4,2,1,""],vrf_afi:[4,2,1,""],vrf_afi_rt_evpn:[4,2,1,""],vrf_l3vni:[4,2,1,""],vrf_route_distiniguisher:[4,2,1,""],vrrp_advertisement_interval:[4,2,1,""],vrrp_preempt:[4,2,1,""],vrrp_priority:[4,2,1,""],vrrp_state:[4,2,1,""],vrrp_vip:[4,2,1,""],vrrp_vrid:[4,2,1,""],vrrpe_spf_basic:[4,2,1,""],vrrpe_vip:[4,2,1,""],vrrpe_vmac:[4,2,1,""],vrrpe_vrid:[4,2,1,""]},"pyswitch.os.base.lldp":{LLDP:[4,1,1,""]},"pyswitch.os.base.lldp.LLDP":{get_lldp_neighbors_request:[4,2,1,""],neighbors:[4,2,1,""]},"pyswitch.os.base.services":{Services:[4,1,1,""]},"pyswitch.os.base.services.Services":{arp:[4,3,1,""]},"pyswitch.os.base.snmp":{SNMP:[4,1,1,""]},"pyswitch.os.base.snmp.SNMP":{add_snmp_community:[4,2,1,""],add_snmp_host:[4,2,1,""],del_snmp_community:[4,2,1,""],del_snmp_host:[4,2,1,""]},"pyswitch.os.base.system":{System:[4,1,1,""]},"pyswitch.os.base.system.System":{uptime:[4,3,1,""]},"pyswitch.os.base.vcs":{VCS:[4,1,1,""]},"pyswitch.os.base.vcs.VCS":{vcs_nodes:[4,3,1,""],vcs_vip:[4,2,1,""]},"pyswitch.os.nos":{base:[6,0,0,"-"]},"pyswitch.os.nos.base":{"interface":[6,0,0,"-"],bgp:[6,0,0,"-"],services:[6,0,0,"-"],system:[6,0,0,"-"]},"pyswitch.os.nos.base.bgp":{Bgp:[6,1,1,""]},"pyswitch.os.nos.base.bgp.Bgp":{has_rbridge_id:[6,3,1,""],os:[6,3,1,""],valid_int_types:[6,3,1,""],valid_intp_types:[6,3,1,""]},"pyswitch.os.nos.base.interface":{Interface:[6,1,1,""]},"pyswitch.os.nos.base.interface.Interface":{fabric_isl:[6,2,1,""],fabric_trunk:[6,2,1,""],has_rbridge_id:[6,3,1,""],ip_anycast_gateway:[6,2,1,""],l2_mtu_const:[6,3,1,""],l3_ipv6_mtu_const:[6,3,1,""],l3_mtu_const:[6,3,1,""],spanning_tree_state:[6,2,1,""],valid_int_types:[6,3,1,""],valid_intp_types:[6,3,1,""]},"pyswitch.os.nos.base.services":{Services:[6,1,1,""]},"pyswitch.os.nos.base.services.Services":{arp:[6,3,1,""],vrrp:[6,2,1,""],vrrpe:[6,2,1,""]},"pyswitch.os.nos.base.system":{System:[6,1,1,""]},"pyswitch.os.nos.base.system.System":{chassis_name:[6,2,1,""],host_name:[6,2,1,""],maintenance_mode:[6,2,1,""],rbridge_id:[6,2,1,""],router_id:[6,2,1,""],system_ip_mtu:[6,2,1,""],system_l2_mtu:[6,2,1,""]},"pyswitch.os.slxos":{base:[8,0,0,"-"]},"pyswitch.os.slxos.base":{"interface":[8,0,0,"-"],bgp:[8,0,0,"-"],services:[8,0,0,"-"],system:[8,0,0,"-"]},"pyswitch.os.slxos.base.bgp":{Bgp:[8,1,1,""]},"pyswitch.os.slxos.base.bgp.Bgp":{evpn_afi:[8,2,1,""],evpn_afi_peer_activate:[8,2,1,""],evpn_allowas_in:[8,2,1,""],evpn_graceful_restart:[8,2,1,""],evpn_next_hop_unchanged:[8,2,1,""],has_rbridge_id:[8,3,1,""],os:[8,3,1,""],retain_rt_all:[8,2,1,""],valid_int_types:[8,3,1,""],valid_intp_types:[8,3,1,""],vni_add:[8,2,1,""]},"pyswitch.os.slxos.base.interface":{Interface:[8,1,1,""]},"pyswitch.os.slxos.base.interface.Interface":{fabric_isl:[8,2,1,""],fabric_trunk:[8,2,1,""],has_rbridge_id:[8,3,1,""],ip_anycast_gateway:[8,2,1,""],l2_mtu_const:[8,3,1,""],l3_ipv6_mtu_const:[8,3,1,""],l3_mtu_const:[8,3,1,""],spanning_tree_state:[8,2,1,""],valid_int_types:[8,3,1,""],valid_intp_types:[8,3,1,""]},"pyswitch.os.slxos.base.services":{Services:[8,1,1,""]},"pyswitch.os.slxos.base.services.Services":{vrrp:[8,2,1,""],vrrpe:[8,2,1,""]},"pyswitch.os.slxos.base.system":{System:[8,1,1,""]},"pyswitch.os.slxos.base.system.System":{chassis_name:[8,2,1,""],host_name:[8,2,1,""],maintenance_mode:[8,2,1,""],rbridge_id:[8,2,1,""],router_id:[8,2,1,""],system_ip_mtu:[8,2,1,""],system_l2_mtu:[8,2,1,""]},"pyswitch.utilities":{InvalidBgpArgs:[2,4,1,""],RestInterfaceError:[2,4,1,""],find:[2,6,1,""],findText:[2,6,1,""],findall:[2,6,1,""],findlist:[2,6,1,""],get_bgp_api:[2,6,1,""],valid_interface:[2,6,1,""],valid_physical_name:[2,6,1,""],valid_port_channel_name:[2,6,1,""],valid_vlan_id:[2,6,1,""]},pyswitch:{device:[2,0,0,"-"],os:[3,0,0,"-"],utilities:[2,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","staticmethod","Python static method"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:exception","5":"py:staticmethod","6":"py:function"},terms:{"00xx":4,"02e0":4,"1ab":4,"1ad3":4,"break":4,"class":[2,4,6,8],"default":[2,4,6,8],"export":4,"function":[4,6,8],"import":[2,4,6,8],"int":[2,4,6,8],"long":4,"new":4,"return":[2,4,6,8],"short":4,"static":4,"switch":[4,6,8],"true":[2,4,6,8],"try":6,For:[4,6,8],IPs:4,NOS:[2,4,6,8],That:4,The:[4,6,8],Use:2,VCS:[4,6,8],_updat:2,aaaa:4,aabb:4,acc_vlan:4,access:4,access_mod:4,access_vlan:4,action:[2,4,6,8],activ:[4,6,8],add:[4,6],add_int_vrf:4,add_snmp_commun:4,add_snmp_host:4,add_vlan_int:[4,6,8],added:4,address:[2,4,8],admin:[2,4,6,8],admin_st:4,administr:4,advertis:4,af_ip_allowas_in:4,afi:[2,4,8],after:4,age:4,ageout:4,aggreg:4,aging:4,agre:[2,4,6,8],all:[4,6,8],allow:4,allowa:4,allowas_in:4,along:4,alreadi:4,ani:[2,4,6,8],anycast:[4,6],anycast_ip:6,anycast_mac:4,apach:[2,4,6,8],api:2,applic:[2,4,6,8],arg:[2,4,6,8],arp:[4,6],arp_aging_timeout:4,arp_suppress:4,as4:4,as4_cap:4,asn:4,assert:[4,6,8],assocai:[4,6,8],associ:[4,6],attach:4,attribut:[2,4,6,8],attributeerror:[4,6],auth:[2,4,6,8],auto:4,automat:4,back:4,base:[1,2,3,5,7],basi:[2,4,6,8],bbbb:4,beef:4,being:4,between:[4,6,8],bfd:4,bgp:[2,3,5,7],bit:4,bool:[2,4,6,8],both:4,brocad:[2,4,6,8],cafe:4,call:[4,6,8],callback:[4,6,8],can:2,capabl:4,cast:2,cccc:4,ccdd:4,chang:4,channel:[2,4,6,8],channel_group:[4,6,8],channel_typ:[4,6,8],chassi:[6,8],chassis_nam:[6,8],close:2,command:4,commun:[2,4,6,8],complet:[4,6,8],complianc:[2,4,6,8],condit:[2,4,6,8],conf:6,config:[4,6,8],configur:[4,6,8],conn:[2,4,6,8],connect:[2,4],consid:2,contain:[4,6,8],content:[0,1],convers:4,conversational_arp:4,conversational_mac:4,copi:[2,4,6,8],copyright:[2,4,6,8],count:4,creat:4,create_evpn_inst:4,create_loopback:4,create_portchannel:4,create_v:4,ctag:4,current:4,dafe:4,data:[2,6],db8:4,deactiv:[4,8],def:4,default_vrf_max_path:4,default_vrf_redistribute_connect:4,default_vrf_unicast_address_famili:4,defin:4,deic:4,del_access_vlan:4,del_ip:4,del_snmp_commun:4,del_snmp_host:4,del_vlan_int:[4,6,8],delet:[4,6,8],delete_afi:4,delete_rt:4,desc:4,describ:4,descript:4,design:2,detail:[4,6],detect:4,dev:[2,4,6,8],devel:4,devic:[1,4,6,8],devicecommerror:2,dict:[2,4,6],dictionari:[2,4],directli:2,disabl:[4,6,8],disable_switchport:4,discoveri:4,distiniguish:4,distribut:[2,4,6,8],doctest:[2,4,6,8],don:4,donor:4,donor_nam:4,donor_typ:4,due:4,duplic:4,duplicate_mac_timer_valu:4,each:4,ecmp:4,edit:[4,6,8],eeff:4,either:[2,4,6,8],elementtre:[4,6,8],ellipsi:2,enabl:[4,6,8],enable_peer_bfd:4,enable_switchport:[4,6,8],error:2,etc:[4,6,8],even:4,evpn:[4,8],evpn_afi:[4,8],evpn_afi_peer_activ:[4,8],evpn_allowas_in:[4,8],evpn_graceful_restart:[4,8],evpn_inst:4,evpn_instance_duplicate_mac_tim:4,evpn_instance_mac_timer_max_count:4,evpn_instance_nam:4,evpn_instance_rd_auto:4,evpn_instance_rt_both_ignore_a:4,evpn_n_addr:2,evpn_next_hop_unchang:[4,8],exampl:[2,4,6,8],except:[2,4,6,8],exclud:4,execut:[4,6,8],expect:4,expr:2,express:[2,4,6,8],extend:[2,4],extens:4,f000:4,fabric:[2,4,6,8],fabric_isl:[6,8],fabric_neighbor:4,fabric_servic:[2,3],fabric_trunk:[6,8],fabricservic:4,fals:[2,4,6,8],famili:4,fc00:4,fcoe:4,fe80:4,featur:[2,4],fetch:4,ffff:4,fibr:4,file:[2,4,6,8],find:[2,6],find_interface_by_mac:2,findal:2,findlist:2,findtext:2,firmwar:2,firmware_vers:2,flag:4,format:[2,4],fortygigabitethernet:4,forward:4,foward:4,from:[2,4],gatewai:[4,6],get:[4,6,8],get_bgp_api:2,get_bgp_neighbor:4,get_interface_detail_request:4,get_interface_switchport_request:4,get_ip_address:4,get_lldp_neighbors_request:4,get_node_valu:4,get_port_chann_detail_request:4,get_vlan_brief_request:4,get_vlan_int:4,gigabitethernet:[2,4,6,8],global:4,govern:[2,4,6,8],grace:4,graceful_restart:4,group:4,gw_name:4,gw_type:4,hardwar:4,has_rbridge_id:[4,6,8],hasmor:4,hodor:4,hold:[2,4,6,8],hop:4,host:[4,6,8],host_info:4,host_nam:[6,8],http:[2,4,6,8],hundredgigabitethernet:4,identifi:4,ifindex:4,ignor:4,ignore_exception_detail:[4,6,8],impli:[2,4,6,8],inc:[2,4,6,8],index:0,instanc:4,instance_nam:4,instead:[2,4,6,8],int_ipv4_arp_aging_timout:4,int_nam:4,int_typ:[2,4,6,8],integ:2,inter:4,inter_typ:4,interfac:[2,3,5,7],interface_detail:4,interface_exist:4,interv:4,invalid:[4,6,8],invalidbgparg:2,ip_addr:[4,8],ip_address:4,ip_anycast_gatewai:[6,8],ip_mtu:4,ip_unnumb:4,ip_vers:[4,6,8],ipv4:4,ipv5:4,ipv6:4,ipv6_link_loc:4,is_port_channel_exist:4,is_vlan_interface_pres:4,isi:[2,3,7],isl:6,isol:4,item:4,its:4,json:2,just:[4,8],kei:4,keyerror:[2,4,6,8],kind:[2,4,6,8],kwarg:[2,4,6,8],l2_mtu_const:[4,6,8],l3_ipv6_mtu_const:[6,8],l3_mtu_const:[6,8],l3vni:4,lacp:4,lacp_timeout:4,languag:[2,4,6,8],last:[4,6,8],last_aggregator_id:4,last_ifindex:4,last_interface_nam:4,last_interface_typ:4,last_vlan_id:4,law:[2,4,6,8],layer2:4,layer3:4,layer:4,lb_name:4,leaf1:4,leaf:4,learn:4,len:4,length:4,level:[2,4,6,8],licens:[2,4,6,8],limit:[2,4,6,8],link:[4,6],list:[2,4],lldp:[2,3],local:4,local_a:[4,8],local_asn:[4,6,8],loop:4,loopback:4,loopback_id:4,mac:[2,4],mac_address:2,mac_move_detect_en:4,mac_move_limit:4,mac_tabl:2,mai:[2,4,6,8],mainten:[6,8],maintenance_mod:[6,8],manag:4,map:4,max:4,max_count:4,max_path:4,method:[2,4,6,8],method_prefix:4,millisecond:4,minimum:4,minimum_link:4,mode:[4,6,8],model:[6,8],modifi:4,modul:[0,1],more:4,most:[4,6,8],move:4,mpl:[2,3,7],mtu:[4,6,8],multihop:4,multipli:4,n_addr:2,name:[2,4,6,8],nativ:4,need:[4,6,8],neighbor:[4,8],netconf:4,next:4,node:4,node_nam:4,none:[2,4,6,8],nos:[1,2,3,4],notimplementederror:4,nsx:4,number:4,object:[2,4],obtain:[2,4,6,8],one:4,onli:[4,6,8],oper:4,org:[2,4,6,8],os_typ:2,ospf:[2,3,7],out:4,output2:4,output:[4,6,8],overlai:4,overlay_gateway_activ:4,overlay_gateway_attach_rbridge_id:4,overlay_gateway_loopback_id:4,overlay_gateway_nam:4,overlay_gateway_typ:4,overlay_gateway_vlan_vni_auto:4,packag:[0,1],page:0,paramet:[4,6,8],pass:[2,4,6,8],passevrrpe_spf_basicd:4,passiv:4,password:[2,4,6,8],path:4,peer:[4,8],peer_bfd_tim:4,peer_ip:[4,8],permiss:[2,4,6,8],physic:[2,4],place:4,po_spe:4,port:[2,4,6,8],port_chann:4,port_channel:[2,4,6,8],port_channel_minimum_link:4,port_channel_spe:4,port_channel_vlag_ignore_split:4,port_int:[4,6,8],portchannel:4,pprint:2,preempt:4,prefix:4,pri_vlan:4,primari:4,prioriti:4,privat:4,private_vlan_mod:4,private_vlan_typ:4,probabl:4,process:4,promiscu:4,properti:[4,6,8],proxi:4,proxy_arp:4,pvlan:4,pvlan_host_associ:4,pvlan_trunk_associ:4,pvlan_typ:4,pyno:[4,6,8],pyswitch:0,rais:[2,4,6,8],rang:[2,4],rbrdige:4,rbridg:[4,6,8],rbridge_id:[2,4,6,8],reach:2,reboot:[6,8],receiv:4,recent:[4,6,8],reconnect:2,recurs:4,redistribut:4,reenabl:4,relat:2,relev:[4,6,8],remot:4,remote_a:[4,8],remov:4,remove_bgp:[4,8],remove_port_channel:[4,6,8],repli:2,repres:4,request:4,requir:[2,4,6,8],resource_depth:2,rest:2,restart:4,restinterfaceerror:2,result:4,retain:4,retain_rt_al:[4,8],role:4,rout:4,router:[4,6,8],router_id:[6,8],rpc:2,rt_valu:4,search:0,sec_vlan:4,secondari:4,see:[2,4,6,8],servic:[2,3,5,7],service_id:4,session:2,set:[4,6,8],set_ip:4,should:[2,4,6,8],singl:[2,4],single_interface_detail:4,skip:4,slxo:[1,2,3],snmp:[2,3],softwar:[2,4,6,8],sourc:4,span:[4,6,8],spanning_tree_st:[4,6,8],specif:[2,4,6,8],specifi:[2,4,6,8],speed:4,split:4,spvlan:4,standard:[4,6,8],state:[2,4,6,8],statu:4,str:[2,4,6,8],string:4,submodul:[1,3,5,7],subpackag:1,succe:2,successfulli:4,suports_rbridg:2,support:4,suppress:4,sw0:[6,8],switchport:4,switchport_list:4,switchport_pvlan_map:4,system:[2,3,5,7],system_ip_mtu:[6,8],system_l2_mtu:[6,8],system_mtu:[6,8],tabl:2,tag:4,tag_native_vlan:4,take:4,target:4,tengigabitethernet:[2,4,6,8],test:4,test_transport_servic:4,test_trunk_allowed_vlan:4,text:6,thi:[2,4,6,8],through:2,time:4,timeout:4,timer:4,tiyp:4,todo:4,traceback:[4,6,8],transmit:4,transport:4,transport_servic:4,tree:[4,6,8],trill:[4,6],trill_link:4,trunk:[4,6],trunk_allowed_vlan:4,trunk_host:4,trunk_mod:4,trunk_promiscu:4,tupl:4,type:[2,4,6,8],unchang:4,under:[2,4,6,8],unless:[2,4,6,8],unnumb:4,updat:4,update_sourc:4,upon:[4,6,8],uptim:4,urn:4,use:[2,4,6,8],using:4,util:1,v6_nd_suppress_ra:4,valid:[2,4,6],valid_int_typ:[4,6,8],valid_interfac:2,valid_intp_typ:[4,6,8],valid_physical_nam:2,valid_port_channel_nam:2,valid_vlan_id:2,valu:[2,4,6,8],valueerror:[4,6,8],vcs:[2,3],vcs_node:4,vcs_vip:4,vdx:4,ve_interfac:4,ve_nam:4,version:[2,4,6,8],vip:4,virtual:[2,4],virtual_mac:4,vlag:4,vlan:[2,4,6,8],vlan_id:[2,4],vlan_pvlan_association_add:4,vmac:4,vni:4,vni_add:[4,8],vpn:4,vrf101:4,vrf1:4,vrf2:4,vrf:[2,4],vrf_afi:4,vrf_afi_rt_evpn:4,vrf_l3vni:4,vrf_max_path:4,vrf_name:4,vrf_redistribute_connect:4,vrf_route_distiniguish:4,vrf_unicast_address_famili:4,vrf_vni:4,vrid:4,vrrp:[4,6,8],vrrp_advertisement_interv:4,vrrp_preempt:4,vrrp_prioriti:4,vrrp_state:4,vrrp_vip:4,vrrp_vrid:4,vrrpe:[4,6,8],vrrpe_spf_bas:4,vrrpe_vip:4,vrrpe_vmac:4,vrrpe_vrid:4,vrrpev3:4,vrrpv3:4,vtep:4,want:4,warranti:[2,4,6,8],when:[4,6],which:[2,4,6,8],without:[2,4,6,8],word:4,work:4,write:[2,4,6,8],www:[2,4,6,8],xml:[2,4],you:[2,4,6,8]},titles:["Welcome to pyswitchlib\u2019s documentation!","pyswitch","pyswitch package","pyswitch.os package","pyswitch.os.base package","pyswitch.os.nos package","pyswitch.os.nos.base package","pyswitch.os.slxos package","pyswitch.os.slxos.base package"],titleterms:{base:[4,6,8],bgp:[4,6,8],content:[2,3,4,5,6,7,8],devic:2,document:0,fabric_servic:4,indic:0,interfac:[4,6,8],isi:8,lldp:4,modul:[2,3,4,5,6,7,8],mpl:8,nos:[5,6],ospf:8,packag:[2,3,4,5,6,7,8],pyswitch:[1,2,3,4,5,6,7,8],pyswitchlib:0,servic:[4,6,8],slxo:[7,8],snmp:4,submodul:[2,4,6,8],subpackag:[2,3,5,7],system:[4,6,8],tabl:0,util:2,vcs:4,welcom:0}})