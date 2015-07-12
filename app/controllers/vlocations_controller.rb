class VlocationsController < ApplicationController

  # GET /vlocations
  # GET /vlocations.json
  def index
      @vlocations = Vlocation.all
      render :json => @vlocations
  end

end
