# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_25_171433) do

  create_table "active_admin_comments", force: :cascade do |t|
    t.string "namespace"
    t.text "body"
    t.string "resource_type"
    t.integer "resource_id"
    t.string "author_type"
    t.integer "author_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id"
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace"
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id"
  end

  create_table "admin_users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_admin_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true
  end

  create_table "apartments", force: :cascade do |t|
    t.string "usa"
    t.integer "scara_id", null: false
    t.string "titular"
    t.integer "persoane"
    t.decimal "balanta"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["scara_id"], name: "index_apartments_on_scara_id"
  end

  create_table "apartments_proprietari", id: false, force: :cascade do |t|
    t.integer "apartment_id", null: false
    t.integer "proprietar_id", null: false
    t.index ["apartment_id", "proprietar_id"], name: "index_apartments_proprietari_on_apartment_id_and_proprietar_id"
    t.index ["proprietar_id", "apartment_id"], name: "index_apartments_proprietari_on_proprietar_id_and_apartment_id"
  end

  create_table "blocs", force: :cascade do |t|
    t.string "address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "blocs_cheltuieli", id: false, force: :cascade do |t|
    t.integer "cheltuieli_id", null: false
    t.integer "bloc_id", null: false
    t.index ["bloc_id", "cheltuieli_id"], name: "index_blocs_cheltuieli_on_bloc_id_and_cheltuieli_id"
    t.index ["cheltuieli_id", "bloc_id"], name: "index_blocs_cheltuieli_on_cheltuieli_id_and_bloc_id"
  end

  create_table "cheltuieli", force: :cascade do |t|
    t.string "nume"
    t.integer "tip"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "proprietari", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_proprietari_on_email", unique: true
    t.index ["reset_password_token"], name: "index_proprietari_on_reset_password_token", unique: true
  end

  create_table "scari", force: :cascade do |t|
    t.string "nume"
    t.integer "bloc_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["bloc_id"], name: "index_scari_on_bloc_id"
  end

  add_foreign_key "apartments", "scari"
  add_foreign_key "scari", "blocs"
end
