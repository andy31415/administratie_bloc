class RaportLunarController < ApplicationController
  before_action :authenticate_admin_user!

  def start
    puts params.inspect
  end

end
