class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

	has_many :user_stocks
	has_many :stocks, through: :user_stocks

	#	only add stock to user stock table if user has not reached their limit of 10 and stock has not already
#	been added
	def can_add_stock?(ticker_symbol)
		under_stock_limit? && !stock_already_added?(ticker_symbol)
	end

#	limit the amount of stocks being track to 10
	def under_stock_limit?
		(user_stocks.count < 10)
	end


	def stock_already_added?(ticker_symbol)
		stock = Stock.find_by_ticker(ticker_symbol)
		return false unless stock
		user_stocks.where(stock_id: stock.id).exists?
	end
end
