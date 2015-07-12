json.array!(@transactions) do |transaction|
  json.extract! transaction, :id, :id, :created_at, :user_id, :transaction_type, :amount
  json.url transaction_url(transaction, format: :json)
end
