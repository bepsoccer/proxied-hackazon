# proxied-hackazon

Run a docker container include hackazon, apache, mysql, and nodejs with express server

This work is based on https://github.com/cmutzel/all-in-one-hackazon

# Instructions

To build the container:
docker build --rm -t bepsoccer/proxied-hackazon .

then run via: 
docker run --name hackazon -d -p 80:8080  bepsoccer/proxied-hackazon

Login into hackazon at http:// (( your host here... )) and begin configuring...  You can just select to use the existing db password as it is set in the startup script.