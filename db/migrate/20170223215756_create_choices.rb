class CreateChoices < ActiveRecord::Migration[5.0]
  def change
    create_table :choices do |t|
      t.belongs_to :question
      t.string :caption
      t.string :value
      t.integer :display_no

      t.timestamps
    end
  end
end
