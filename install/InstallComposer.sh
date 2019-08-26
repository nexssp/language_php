curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/
sudo chmod 755 /usr/local/bin/composer.phar
echo "alias composer=\"php /usr/local/bin/composer.phar\"" >> ~/.bash_profile
source ~/.bash_profile

composer --version