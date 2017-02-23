class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.belongs_to :survey
      t.string :caption
      t.string :type
      t.integer :display_seq

      t.timestamps
    end
  end
end
