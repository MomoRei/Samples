class VtransactionsController < ApplicationController

  # GET /vtransactions
  # GET /vtransactions.json
  def index
    @vtransactions = Vtransaction.all
    render :json => @vtransactions
  end

end
