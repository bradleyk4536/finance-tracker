class UsersController < ApplicationController

	def my_portfolio
#		initiate user_stock variable many to many association

		@user_stocks = current_user.stocks

#		restrict action based on the current user
		@user = current_user
	end

	def my_friends

	end
end
