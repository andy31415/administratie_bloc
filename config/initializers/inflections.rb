# Be sure to restart your server when you modify this file.

# Add new inflection rules using the following format. Inflections
# are locale specific, and you may define rules for as many different
# locales as you wish. All of these examples are active by default:
ActiveSupport::Inflector.inflections(:en) do |inflect|
   inflect.plural /^(scar)a$/i, '\1i'
   inflect.plural /^(proprietar)/i, '\1i'
   inflect.singular /^(proprietar)i/i, '\1'
   inflect.singular /^(scar)i/i, '\1a'
#   inflect.singular /^(ox)en/i, '\1'
#   inflect.irregular 'person', 'people'
   inflect.uncountable %w( cheltuieli )
end

# These inflection rules are supported but not enabled by default:
# ActiveSupport::Inflector.inflections(:en) do |inflect|
#   inflect.acronym 'RESTful'
# end
