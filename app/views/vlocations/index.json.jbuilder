json.array!(@locations) do |location|
  json.extract! location, :id, :id, :created_at, :user_id, :longitude, :latitude
  json.url location_url(location, format: :json)
end
