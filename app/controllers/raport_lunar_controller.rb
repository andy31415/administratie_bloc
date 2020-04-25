class RaportLunarController < ApplicationController
  before_action :authenticate_admin_user!

  def start
    @bloc = Bloc.find(params[:id])
    puts @bloc.inspect
  end

end
