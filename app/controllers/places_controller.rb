class PlacesController < ApplicationController
  def index
  end

  def photos
    client = Foursquare2::Client.new(:client_id => ENV['FOURSQUARE_CLIENT_ID'], :client_secret => ENV['FOURSQUARE_CLIENT_SECRET'], :api_version => '20120505')
    if params[:location]
      @search = client.search_venues(:near => params[:location], :query =>  params[:place])
      @foursquare_id = @search["venues"][0]["id"]
      @location =  Instagram.location_search(@foursquare_id).first
      @photos = Instagram.location_recent_media(@location.id, options = {count: 16})
    end
  end

  def about
  end
end