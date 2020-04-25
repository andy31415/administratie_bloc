# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# This is a test seed file only

AdminUser.create!(email: 'andy314@gmail.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

b = Bloc.create(address: 'RAZOARE 158 C5')

s1 = Scara.create(bloc: b, nume: "Scara 1")
Apartment.create(scara: s1, persoane: 2, usa: "1", titular: "CSASZAR ANDREI")
Apartment.create(scara: s1, persoane: 2, usa: "2", titular: "LAZARESCU VLAD")
Apartment.create(scara: s1, persoane: 2, usa: "2A", titular: "BIVOL VADIM")
Apartment.create(scara: s1, persoane: 4, usa: "3", titular: "SUTA FLORENTINA")
Apartment.create(scara: s1, persoane: 1, usa: "4", titular: "MAXIM BOGDAN")
Apartment.create(scara: s1, persoane: 2, usa: "4A", titular: "MOCA DOREL")
Apartment.create(scara: s1, persoane: 0, usa: "5", titular: "TIRON BOGDAN")
Apartment.create(scara: s1, persoane: 2, usa: "6", titular: "HUDREA ADRIAN")
Apartment.create(scara: s1, persoane: 1, usa: "7", titular: "ASCHILEAN ALIN")
Apartment.create(scara: s1, persoane: 0, usa: "8", titular: "JOLDES ALEXANDRA")
Apartment.create(scara: s1, persoane: 1, usa: "9", titular: "STEFAN MARIUS")
Apartment.create(scara: s1, persoane: 2, usa: "10", titular: "VARGA LUCIAN")
Apartment.create(scara: s1, persoane: 3, usa: "11", titular: "TOROK IOSIF")
Apartment.create(scara: s1, persoane: 2, usa: "12", titular: "DRAGOSTE LOREDANA")
Apartment.create(scara: s1, persoane: 2, usa: "13", titular: "BUZAS INGRID")
Apartment.create(scara: s1, persoane: 1, usa: "14", titular: "ALEXA OANA")
Apartment.create(scara: s1, persoane: 2, usa: "15", titular: "ZAMFIR MANUELA")
Apartment.create(scara: s1, persoane: 1, usa: "31A", titular: "JUCAN STEFAN")
Apartment.create(scara: s1, persoane: 1, usa: "31B", titular: "NAGY SZIDONIA")

s2 = Scara.create(bloc: b, nume: "Scara 2")
Apartment.create(scara: s2, persoane: 2, usa: "16", titular: "CHIS OVIDIU")
Apartment.create(scara: s2, persoane: 0, usa: "17", titular: "BITA SIMONA")
Apartment.create(scara: s2, persoane: 1, usa: "18", titular: "DACIN ANA")
Apartment.create(scara: s2, persoane: 1, usa: "19", titular: "MEZEI FIRA")
Apartment.create(scara: s2, persoane: 1, usa: "20", titular: "PRAJINARU C")
Apartment.create(scara: s2, persoane: 1, usa: "21", titular: "RADU GRINDEI")
Apartment.create(scara: s2, persoane: 1, usa: "22", titular: "NISTOR FLORINA")
Apartment.create(scara: s2, persoane: 3, usa: "23", titular: "HEDESIU DAN")
Apartment.create(scara: s2, persoane: 1, usa: "24", titular: "SIMOCA GABRIEL")
Apartment.create(scara: s2, persoane: 1, usa: "25", titular: "BLAGA ALEXANDRU")
Apartment.create(scara: s2, persoane: 2, usa: "26", titular: "NICORICI IOANA")
Apartment.create(scara: s2, persoane: 1, usa: "27", titular: "HATEGAN ANGELA")
Apartment.create(scara: s2, persoane: 1, usa: "28", titular: "CIOBANU MARIA")
Apartment.create(scara: s2, persoane: 2, usa: "29", titular: "SMART RADIOCOM")
Apartment.create(scara: s2, persoane: 0, usa: "30", titular: "BRE")
Apartment.create(scara: s2, persoane: 1, usa: "32A", titular: "HADA MARIA")
Apartment.create(scara: s2, persoane: 1, usa: "32B", titular: "HADA MARIA")

c1 = Cheltuieli.create(nume: 'Apa', tip: :apa)
c2 = Cheltuieli.create(nume: 'Curatenie', tip: :impartit_la_nr_apartamente)
c3 = Cheltuieli.create(nume: 'Electric', tip: :impartit_la_nr_persoane)
c4 = Cheltuieli.create(nume: 'Administratie', tip: :cost_fix_pe_apartament)

b.cheltuieli << c1
b.cheltuieli << c2
b.cheltuieli << c3
b.cheltuieli << c4

# FIXME: other stuff?
#
#


