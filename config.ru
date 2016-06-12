require "sinatra"
require "sass/plugin/rack"
require "./easypeasy"

Sass::Plugin.options[:style] = :compressed
use Sass::Plugin::Rack

run Sinatra::Application
