class RaportLunarController < ApplicationController
  before_action :authenticate_admin_user!

  def start
    respond_to do |format|
      format.html {
        @bloc_id = params[:id]
      }
      format.json {
        @bloc = Bloc.find(params[:id])
      }
    end
  end

end
