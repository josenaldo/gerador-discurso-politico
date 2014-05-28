# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

	config.vm.box = "saucy64-gerador-discurso-esquerda"

	config.vm.box_url = "https://cloud-images.ubuntu.com/vagrant/saucy/20140427/saucy-server-cloudimg-amd64-vagrant-disk1.box"

	config.vm.network :private_network, ip: "192.168.33.33"

	config.vm.provision :shell, :path => "bootstrap.sh"
	
	config.vm.provider :virtualbox do |vb|
		vb.customize ["modifyvm", :id, "--memory", "1024"]
		vb.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/vagrant", "1"]
	end
	
end
