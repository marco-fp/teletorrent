Vagrant.configure("2") do |config|
  config.vm.box = "azure"
	config.vm.network "public_network"
	config.vm.provider :azure do |azure, override|
		azure.mgmt_certificate = File.expand_path("marco_azure.pem")
		azure.mgmt_endpoint    = "https://management.core.windows.net"
		azure.subscription_id = "095552f3-c394-4ada-a8de-6d572aa887b7"
		azure.vm_name     = "teletorrentBot"
		azure.cloud_service_name = 'teletorrentBot'
		azure.vm_image    = "b39f27a8b8c64d52b05eac6a62ebad85__Ubuntu-14_04_2-LTS-amd64-server-20150506-en-us-30GB"
		azure.vm_size     = "Small"
    config.vm.box_url = "https://github.com/msopentech/vagrant-azure/raw/master/dummy.box"
		azure.vm_user = "marco"
    azure.vm_password = "secretpassword00!"
		azure.vm_location = "Central US"
		azure.tcp_endpoints = '80:80'
		azure.ssh_port = "22"
	end

	config.vm.synced_folder ".", "/vagrant",disabled: true
	config.ssh.username = 'marco'
	config.ssh.password = 'secretpassword00!'

	config.vm.provision "ansible" do |ansible|
		ansible.raw_arguments=["-vvvv"]
		ansible.sudo = true
		ansible.playbook = "ansible.yml"
		ansible.verbose = "v"
	end
end
