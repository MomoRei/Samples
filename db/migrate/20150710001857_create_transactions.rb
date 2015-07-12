class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.date :created_at
      t.integer :user_id
      t.text :transaction_type
      t.integer :amount
    end
  end
end
