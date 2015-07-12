# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.precompile += %w( bootstrap.min.css )
Rails.application.config.assets.precompile += %w( application.css )
Rails.application.config.assets.precompile += %w( angular/angular.min.js )
Rails.application.config.assets.precompile += %w( angular/angular-route.min.js )
Rails.application.config.assets.precompile += %w( angular/angular-resource.min.js )
Rails.application.config.assets.precompile += %w( angular/angular-animate.min.js )
Rails.application.config.assets.precompile += %w( angular/angular-aria.min.js )
Rails.application.config.assets.precompile += %w( angular-material.min.css )
Rails.application.config.assets.precompile += %w( angular/angular-material.min.js )
Rails.application.config.assets.precompile += %w( ui-bootstrap-tpls-0.13.0.min.js )
Rails.application.config.assets.precompile += %w( app.js )
Rails.application.config.assets.precompile += %w( leaflet/leaflet.js )
Rails.application.config.assets.precompile += %w( leaflet/leaflet-src.js )
Rails.application.config.assets.precompile += %w( leaflet.css )
Rails.application.config.assets.precompile += %w( directives/map.js )
Rails.application.config.assets.precompile += %w( controllers/mapCtrl.js )
Rails.application.config.assets.precompile += %w( services/mapService.js )
Rails.application.config.assets.precompile += %w( d3/d3.min.js )
# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
