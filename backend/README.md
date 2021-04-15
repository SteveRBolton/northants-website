# Northants Core CMS

This is the Northant's Core Drupal 9 CMS application.

## Dependencies

* [Docker](https://docs.docker.com/engine/installation/)
* [Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx)
* [Deeson Docker proxy](https://github.com/teamdeeson/docker-proxy)


### Required configuration

You should configure the project for your needs now. The following amendments need to be made at a minimum:

`.env:` Change the PROJECT_NAME and PROJECT_BASE_URL for your project (the url must end in .localhost). Make up a new HASH_SALT string.

`src/settings/environment.inc:` Configure your domain names here if you know what the remote ones are going to be.

## Build and install

The project can now be built for the first time using the included Makefile

```bash
make
```

This will create the `docroot/` folder and build your website.

It should finish with a one time login URL which you can copy into the Chrome web browser to access your new Drupal site.

## Solr setup
### Local

You may need to manually configure the local solr server. Make sure solr container is running: `docker-compose up solr`

Then run: `make solr-create-core` to create a new solr core named main

### Platform.sh

Follow the guide here: https://docs.platform.sh/guides/drupal9/solr.html Pay particular attention to this section https://docs.platform.sh/guides/drupal9/solr.html#5-export-and-modify-configuration as you will need to modify the config. It's likely you'll need to perform this step whenever search_api_solr is updated.

Any changes to the Solr config will require submitting a ticket with Platform.sh with the Solr config files for them to install on the dedicated environments.

## Starting and stopping the project.

Once you have run the build for the first time, you can stop the project any time with:

```
make stop
```

The project starts again using:

```
make start
```

## Browser access

You can access localhost domains in Chrome without making any changes.  If you want to use other browsers you have to add an entry to your `/etc/hosts` file for this project (replace project url with your url):

```
127.0.0.1 core-cms.northants.localhost
```

## Managing dependencies with composer

All of your dependencies should be managed through composer. This includes any off-the-shelf code such as Drupal core, contrib modules and themes, and any 3rd party libraries.

### To add a module (e.g. redirect):

```bash
composer require drupal/redirect
```

### To update a module (e.g. redirect):

```bash
composer update drupal/redirect
```

### To update Drupal core:
```bash
composer update drupal/core-recommended --with-dependencies
```

**You should commit your composer.lock file to the repository as this will guarantee that any subsequent builds will use the same exact version of all
your dependencies.**

For further details, see the Drupal Composer project documentation:

https://github.com/drupal-composer/drupal-project#composer-template-for-drupal-projects

Composer project usage guide:

https://getcomposer.org/doc/01-basic-usage.md


## Project structure

### docroot/
This directory contains compiled content and should not normally be committed to your repository.

### drush/
This contains your drush site aliases file(s).

### src/
This contains all of your project source code. As follows:

#### src/config/
This contains Drupal's CMI configuration files.

#### src/modules/
This is where you place your custom modules.

Anything within `src/modules/` will be made available in `docroot/modules/custom/`

#### src/settings/
This contains the Drupal site settings, extracted from settings.php.

#### src/themes/
This is where you place your custom theme(s).

Anything within `src/themes/` will be made available in `docroot/themes/custom/`

### vendor/
This is the composer vendor directory, which contains project dependencies, tools and libraries. This should be excluded from your repository.

# Docker commands

You should now have several running docker containers, including nginx, php, mariadb. Run the following command to check this.

```
docker-compose ps
```

You can access the realtime logs from these with:

```
make logs
```

or the logs from a specific container with:

```
docker-compose logs php -f
```

If you want to delete the site and rerun the installation process you can use:

```bash
make clean && make install
```

You can use the docker-compose tool as a shortcut for common docker commands. To run a command within one of the containers you can use:
```
docker-compose exec <container-name> <command>
```

For example to start a mysql client on the database container (mariadb) run:
```
docker-compose exec mariadb mysql
```

To get a bash terminal inside the PHP container you can use the following:

```bash
docker-compose exec php /bin/bash
```

To import an exported site database into the database container (if you don't have pv installed you can do so with `brew install pv`):

```bash
pv database_export_filename.sql | docker-compose exec -T mariadb mysql -udrupal -pdrupal drupal
```

Note that this method is up to 33% faster than the drush method `pv database_export_filename.sql | drush @docker sql-cli`

# Drush commands
The Drush command line tool is available for querying all the Drupal environments. This is done using Drush aliases (the @ bit in any Drush command). The aliases available are:

...

To see the status of an environment you can use, for example, `./vendor/bin/drush @docker status`.

As this is a lot of typing, it's recommended you create an alias for drush in your `.bashrc` file, e.g. `alias drush=./vendor/bin/drush`

To see a list of all Drush commands you can use `drush @docker list` and to see more details about a specific command you can use `drush @docker help` command

Note, to access environments other than your own will require you have user access to the servers they are hosted on.

## Logging in.

To login to Drupal as the administrator you can use `drush @docker uli`

# Site config

This site uses the (config pages)[https://www.drupal.org/project/config_pages] module to set some global configuration including the homepage and alerts.
To set this, navigate to `/admin/structure/config_pages` and choose a page to modify.


# Things to know

## Required environment variables
| Name        | Type        | Value |
| ----------- | ----------- | ----------- |
| CLOUDFLARE_PURGE_ENABLED      | Boolean       | TRUE/FALSE |
| CLOUDFLARE_API_KEY   | String        | The api key of the cloudflare user|
| CLOUDFLARE_EMAIL  | String        | The email of the cloudflare user|
| CLOUDFLARE_ZONE_ID  | String        | The zone id within Cloudflare where the website resides |
| DRUPAL_HASH_STATUS  | String        | The unique hash used for salts |
| NEXT_PUBLIC_BASE_URL  | URI        | The frontend website URL (https://www.westnorthants.co.uk/) **must contain trailing slash** |
| NEXT_PUBLIC_THEME  | String        | The design system theme name i.e. west |

## User roles and embed editor permissions
When creating new roles make sure the role has permission to use both the "Basic HTML (with Embed)" and "Basic HTML (with Embed)
for Accordion" text formats.


## New slices for the embed editor
When creating a new slice for the embed editor make sure it is added to the "Basic HTML (with Embed)" and the "Basic HTML (with Embed)
for Accordion" text formats.
