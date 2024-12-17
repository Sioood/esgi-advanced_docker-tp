FROM php:8.3-fpm

# Installer les dépendances nécessaires pour PHP et MariaDB
RUN apt-get update
RUN apt-get install -y libmariadb-dev
RUN docker-php-ext-install mysqli pdo_mysql

# Exposer le port pour PHP-FPM
EXPOSE 9000
