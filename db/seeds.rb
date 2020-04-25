# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# This is a test seed file only

Administrator.create(email: "andy314@gmail.com", password: "password", first_name: "Andrei", last_name: "Litvin")

b = Bloc.create(address: 'RAZOARE 158 C5')

s1 = Scara.create(bloc: b, nume: "Scara 1")
Apartment.create(scara: s1, usa: "1", proprietar: "CSASZAR ANDREI")
Apartment.create(scara: s1, usa: "2", proprietar: "LAZARESCU VLAD")
Apartment.create(scara: s1, usa: "2A", proprietar: "BIVOL VADIM")
Apartment.create(scara: s1, usa: "3", proprietar: "SUTA FLORENTINA")
Apartment.create(scara: s1, usa: "4", proprietar: "MAXIM BOGDAN")
Apartment.create(scara: s1, usa: "4A", proprietar: "MOCA DOREL")
Apartment.create(scara: s1, usa: "5", proprietar: "TIRON BOGDAN")
Apartment.create(scara: s1, usa: "6", proprietar: "HUDREA ADRIAN")
Apartment.create(scara: s1, usa: "7", proprietar: "ASCHILEAN ALIN")
Apartment.create(scara: s1, usa: "8", proprietar: "JOLDES ALEXANDRA")
Apartment.create(scara: s1, usa: "9", proprietar: "STEFAN MARIUS")
Apartment.create(scara: s1, usa: "10", proprietar: "VARGA LUCIAN")
Apartment.create(scara: s1, usa: "11", proprietar: "TOROK IOSIF")
Apartment.create(scara: s1, usa: "12", proprietar: "DRAGOSTE LOREDANA")
Apartment.create(scara: s1, usa: "13", proprietar: "BUZAS INGRID")
Apartment.create(scara: s1, usa: "14", proprietar: "ALEXA OANA")
Apartment.create(scara: s1, usa: "15", proprietar: "ZAMFIR MANUELA")
Apartment.create(scara: s1, usa: "31A", proprietar: "JUCAN STEFAN")
Apartment.create(scara: s1, usa: "31B", proprietar: "NAGY SZIDONIA")

s2 = Scara.create(bloc: b, nume: "Scara 2")
Apartment.create(scara: s2, usa: "16", proprietar: "CHIS OVIDIU")
Apartment.create(scara: s2, usa: "17", proprietar: "BITA SIMONA")
Apartment.create(scara: s2, usa: "18", proprietar: "DACIN ANA")
Apartment.create(scara: s2, usa: "19", proprietar: "MEZEI FIRA")
Apartment.create(scara: s2, usa: "20", proprietar: "PRAJINARU C")
Apartment.create(scara: s2, usa: "21", proprietar: "RADU GRINDEI")
Apartment.create(scara: s2, usa: "22", proprietar: "NISTOR FLORINA")
Apartment.create(scara: s2, usa: "23", proprietar: "HEDESIU DAN")
Apartment.create(scara: s2, usa: "24", proprietar: "SIMOCA GABRIEL")
Apartment.create(scara: s2, usa: "25", proprietar: "BLAGA ALEXANDRU")
Apartment.create(scara: s2, usa: "26", proprietar: "NICORICI IOANA")
Apartment.create(scara: s2, usa: "27", proprietar: "HATEGAN ANGELA")
Apartment.create(scara: s2, usa: "28", proprietar: "CIOBANU MARIA")
Apartment.create(scara: s2, usa: "29", proprietar: "SMART RADIOCOM")
Apartment.create(scara: s2, usa: "30", proprietar: "BRE")
Apartment.create(scara: s2, usa: "32A", proprietar: "HADA MARIA")
Apartment.create(scara: s2, usa: "32B", proprietar: "HADA MARIA")

# FIXME: other stuff?
