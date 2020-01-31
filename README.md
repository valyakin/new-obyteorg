# Obyte Landing

## Clone & Install

```
git clone git@github.com:ipavlenko/org.obyte.landing.git
./bin/grav install
chown -R www-data.www-data ./docroot/cache
chown -R www-data.www-data ./docroot/user
```

## Configure

Prepare network:
```
docker network create --driver=bridge --subnet=192.168.30.0/24 obyte
```

## Build

```
yarn rebuild:obyte:landing
```

## Start

```
yarn restart:obyte:landing
```

## Network

Site IP:
192.168.30.11
