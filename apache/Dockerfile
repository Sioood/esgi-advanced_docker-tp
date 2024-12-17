# Use the latest Ubuntu image
FROM ubuntu:latest

# Set non-interactive mode to avoid prompts during installation
ENV DEBIAN_FRONTEND=noninteractive

# Update the package list and install Apache
RUN apt-get update
RUN apt-get install -y apache2
RUN apt-get clean

# Activer les modules nécessaires pour PHP-FPM et la réécriture des URLs
RUN a2enmod proxy
RUN a2enmod proxy_fcgi
RUN a2enmod rewrite

# Expose the default HTTP port
EXPOSE 80

# Start Apache in the foreground
CMD ["apachectl", "-D", "FOREGROUND"]
