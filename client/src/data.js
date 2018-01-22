const dataFile = [
{
  date: '2018-01-21',
  info: [
    {key:  'id',
    value:  1516521600},
    {key:  'productivity_pulse',
    value:  76},
    {key:  'very_productive_percentage',
    value:  72.6},
    {key:  'productive_percentage',
    value:  3.8},
    {key:  'neutral_percentage',
    value:  3.1},
    {key:  'distracting_percentage',
    value:  0},
    {key:  'very_distracting_percentage',
    value:  20.5},
    {key:  'all_productive_percentage',
    value:  76.4},
    {key:  'all_distracting_percentage',
    value:  20.5},
    {key:  'uncategorized_percentage',
    value:  0.1},
    {key:  'business_percentage',
    value:  0},
    {key:  'communication_and_scheduling_percentage',
    value:  27.1},
    {key:  'social_networking_percentage',
    value:  0.9},
    {key:  'design_and_composition_percentage',
    value:  0},
    {key:  'entertainment_percentage',
    value:  19.6},
    {key:  'news_percentage',
    value:  0},
    {key:  'software_development_percentage',
    value:  40.7},
    {key:  'reference_and_learning_percentage',
    value:  4.8},
    {key:  'shopping_percentage',
    value:  0},
    {key:  'utilities_percentage',
    value:  6.9},
    {key:  'total_hours',
    value:  4.24},
    {key:  'very_productive_hours',
    value:  3.07},
    {key:  'productive_hours',
    value:  0.16},
    {key:  'neutral_hours',
    value:  0.13},
    {key:  'distracting_hours',
    value:  0},
    {key:  'very_distracting_hours',
    value:  0.87},
    {key:  'all_productive_hours',
    value:  3.24},
    {key:  'all_distracting_hours',
    value:  0.87},
    {key:  'uncategorized_hours',
    value:  0},
    {key:  'business_hours',
    value:  0},
    {key:  'communication_and_scheduling_hours',
    value:  1.15},
    {key:  'social_networking_hours',
    value:  0.04},
    {key:  'design_and_composition_hours',
    value:  0},
    {key:  'entertainment_hours',
    value:  0.83},
    {key:  'news_hours',
    value:  0},
    {key:  'software_development_hours',
    value:  1.72},
    {key:  'reference_and_learning_hours',
    value:  0.2},
    {key:  'shopping_hours',
    value:  0},
    {key:  'utilities_hours',
    value:  0.29},
    {key:  'total_duration_formatted',
    value:  '4h 14m'},
    {key:  'very_productive_duration_formatted',
    value:  '3h 4m'},
    {key:  'productive_duration_formatted',
    value:  '9m 40s'},
    {key:  'neutral_duration_formatted',
    value:  '7m 59s'},
    {key:  'distracting_duration_formatted',
    value:  'no time'},
    {key:  'very_distracting_duration_formatted',
    value:  '52m 8s'},
    {key:  'all_productive_duration_formatted',
    value:  '3h 14m'},
    {key:  'all_distracting_duration_formatted',
    value:  '52m 8s'},
    {key:  'uncategorized_duration_formatted',
    value:  '13s'},
    {key:  'business_duration_formatted',
    value:  '7s'},
    {key:  'communication_and_scheduling_duration_formatted',
    value:  '1h 8m'},
    {key:  'social_networking_duration_formatted',
    value:  '2m 19s'},
    {key:  'design_and_composition_duration_formatted',
    value:  'no time'},
    {key:  'entertainment_duration_formatted',
    value:  '49m 49s'},
    {key:  'news_duration_formatted',
    value:  'no time'},
    {key:  'software_development_duration_formatted',
    value:  '1h 43m'},
    {key:  'reference_and_learning_duration_formatted',
    value:  '12m 6s'},
    {key:  'shopping_duration_formatted',
    value:  'no time'},
    {key:  'utilities_duration_formatted',
    value:  '17m 26s'}
  ]
}
//, {
// date:
// info: {
//     key:  id
//     value:  1516435200
//     key:  date
//     value:  2018-01-20
//     key:  productivity_pulse
//     value:  86
//     key:  very_productive_percentage
//     value:  80.6
//     key:  productive_percentage
//     value:  1.7
//     key:  neutral_percentage
//     value:  8.8
//     key:  distracting_percentage
//     value:  0
//     key:  very_distracting_percentage
//     value:  8.9
//     key:  all_productive_percentage
//     value:  82.3
//     key:  all_distracting_percentage
//     value:  9
//     key:  uncategorized_percentage
//     value:  1.5
//     key:  business_percentage
//     value:  6.1
//     key:  communication_and_scheduling_percentage
//     value:  8.8
//     key:  social_networking_percentage
//     value:  1.6
//     key:  design_and_composition_percentage
//     value:  0.1
//     key:  entertainment_percentage
//     value:  7.1
//     key:  news_percentage
//     value:  0.4
//     key:  software_development_percentage
//     value:  59.3
//     key:  reference_and_learning_percentage
//     value:  6.2
//     key:  shopping_percentage
//     value:  0
//     key:  utilities_percentage
//     value:  8.9
//     key:  total_hours
//     value:  5.87
//     key:  very_productive_hours
//     value:  4.73
//     key:  productive_hours
//     value:  0.1
//     key:  neutral_hours
//     value:  0.51
//     key:  distracting_hours
//     value:  0
//     key:  very_distracting_hours
//     value:  0.52
//     key:  all_productive_hours
//     value:  4.83
//     key:  all_distracting_hours
//     value:  0.53
//     key:  uncategorized_hours
//     value:  0.09
//     key:  business_hours
//     value:  0.36
//     key:  communication_and_scheduling_hours
//     value:  0.52
//     key:  social_networking_hours
//     value:  0.1
//     key:  design_and_composition_hours
//     value:  0.01
//     key:  entertainment_hours
//     value:  0.41
//     key:  news_hours
//     value:  0.02
//     key:  software_development_hours
//     value:  3.48
//     key:  reference_and_learning_hours
//     value:  0.37
//     key:  shopping_hours
//     value:  0
//     key:  utilities_hours
//     value:  0.52
//     key:  total_duration_formatted
//     value:  5h 52m
//     key:  very_productive_duration_formatted
//     value:  4h 43m
//     key:  productive_duration_formatted
//     value:  6m
//     key:  neutral_duration_formatted
//     value:  30m 53s
//     key:  distracting_duration_formatted
//     value:  7s
//     key:  very_distracting_duration_formatted
//     value:  31m 25s
//     key:  all_productive_duration_formatted
//     value:  4h 49m
//     key:  all_distracting_duration_formatted
//     value:  31m 32s
//     key:  uncategorized_duration_formatted
//     value:  5m 11s
//     key:  business_duration_formatted
//     value:  21m 22s
//     key:  communication_and_scheduling_duration_formatted
//     value:  31m 2s
//     key:  social_networking_duration_formatted
//     value:  5m 46s
//     key:  design_and_composition_duration_formatted
//     value:  25s
//     key:  entertainment_duration_formatted
//     value:  24m 53s
//     key:  news_duration_formatted
//     value:  1m 24s
//     key:  software_development_duration_formatted
//     value:  3h 28m
//     key:  reference_and_learning_duration_formatted
//     value:  21m 57s
//     key:  shopping_duration_formatted
//     value:  1s
//     key:  utilities_duration_formatted
//     value:  31m 10s
//   },
//   {
//     date:
//     info: {
//     key:  id
//     value:  1516348800
//     key:  date
//     value:  2018-01-19
//     key:  productivity_pulse
//     value:  57
//     key:  very_productive_percentage
//     value:  49
//     key:  productive_percentage
//     value:  1.7
//     key:  neutral_percentage
//     value:  13.9
//     key:  distracting_percentage
//     value:  0
//     key:  very_distracting_percentage
//     value:  35.3
//     key:  all_productive_percentage
//     value:  50.8
//     key:  all_distracting_percentage
//     value:  35.3
//     key:  uncategorized_percentage
//     value:  2
//     key:  business_percentage
//     value:  5.1
//     key:  communication_and_scheduling_percentage
//     value:  7.7
//     key:  social_networking_percentage
//     value:  5.3
//     key:  design_and_composition_percentage
//     value:  0
//     key:  entertainment_percentage
//     value:  30.1
//     key:  news_percentage
//     value:  0.3
//     key:  software_development_percentage
//     value:  24.5
//     key:  reference_and_learning_percentage
//     value:  11.7
//     key:  shopping_percentage
//     value:  0
//     key:  utilities_percentage
//     value:  13.2
//     key:  total_hours
//     value:  6.56
//     key:  very_productive_hours
//     value:  3.22
//     key:  productive_hours
//     value:  0.11
//     key:  neutral_hours
//     value:  0.91
//     key:  distracting_hours
//     value:  0
//     key:  very_distracting_hours
//     value:  2.32
//     key:  all_productive_hours
//     value:  3.33
//     key:  all_distracting_hours
//     value:  2.32
//     key:  uncategorized_hours
//     value:  0.13
//     key:  business_hours
//     value:  0.34
//     key:  communication_and_scheduling_hours
//     value:  0.51
//     key:  social_networking_hours
//     value:  0.35
//     key:  design_and_composition_hours
//     value:  0
//     key:  entertainment_hours
//     value:  1.98
//     key:  news_hours
//     value:  0.02
//     key:  software_development_hours
//     value:  1.61
//     key:  reference_and_learning_hours
//     value:  0.77
//     key:  shopping_hours
//     value:  0
//     key:  utilities_hours
//     value:  0.87
//     key:  total_duration_formatted
//     value:  6h 33m
//     key:  very_productive_duration_formatted
//     value:  3h 13m
//     key:  productive_duration_formatted
//     value:  6m 42s
//     key:  neutral_duration_formatted
//     value:  54m 51s
//     key:  distracting_duration_formatted
//     value:  'no time'
//     key:  very_distracting_duration_formatted
//     value:  2h 19m
//     key:  all_productive_duration_formatted
//     value:  3h 19m
//     key:  all_distracting_duration_formatted
//     value:  2h 19m
//     key:  uncategorized_duration_formatted
//     value:  7m 54s
//     key:  business_duration_formatted
//     value:  20m 10s
//     key:  communication_and_scheduling_duration_formatted
//     value:  30m 29s
//     key:  social_networking_duration_formatted
//     value:  20m 54s
//     key:  design_and_composition_duration_formatted
//     value:  'no time'
//     key:  entertainment_duration_formatted
//     value:  1h 58m
//     key:  news_duration_formatted
//     value:  1m 7s
//     key:  software_development_duration_formatted
//     value:  1h 36m
//     key:  reference_and_learning_duration_formatted
//     value:  45m 56s
//     key:  shopping_duration_formatted
//     value:  4s
//     key:  utilities_duration_formatted
//     value:  52m 1s
//   },
//   {
//     date:
//     info: {
//     key:  id
//     value:  1516262400
//     key:  date
//     value:  2018-01-18
//     key:  productivity_pulse
//     value:  48
//     key:  very_productive_percentage
//     value:  45.3
//     key:  productive_percentage
//     value:  2.6
//     key:  neutral_percentage
//     value:  2.9
//     key:  distracting_percentage
//     value:  0
//     key:  very_distracting_percentage
//     value:  49.2
//     key:  all_productive_percentage
//     value:  47.9
//     key:  all_distracting_percentage
//     value:  49.2
//     key:  uncategorized_percentage
//     value:  0.6
//     key:  business_percentage
//     value:  4.3
//     key:  communication_and_scheduling_percentage
//     value:  4.2
//     key:  social_networking_percentage
//     value:  0.3
//     key:  design_and_composition_percentage
//     value:  0
//     key:  entertainment_percentage
//     value:  48.9
//     key:  news_percentage
//     value:  0.4
//     key:  software_development_percentage
//     value:  27.5
//     key:  reference_and_learning_percentage
//     value:  9.4
//     key:  shopping_percentage
//     value:  0.3
//     key:  utilities_percentage
//     value:  4.1
//     key:  total_hours
//     value:  11.64
//     key:  very_productive_hours
//     value:  5.27
//     key:  productive_hours
//     value:  0.31
//     key:  neutral_hours
//     value:  0.33
//     key:  distracting_hours
//     value:  0
//     key:  very_distracting_hours
//     value:  5.73
//     key:  all_productive_hours
//     value:  5.58
//     key:  all_distracting_hours
//     value:  5.73
//     key:  uncategorized_hours
//     value:  0.07
//     key:  business_hours
//     value:  0.5
//     key:  communication_and_scheduling_hours
//     value:  0.49
//     key:  social_networking_hours
//     value:  0.03
//     key:  design_and_composition_hours
//     value:  0
//     key:  entertainment_hours
//     value:  5.69
//     key:  news_hours
//     value:  0.05
//     key:  software_development_hours
//     value:  3.2
//     key:  reference_and_learning_hours
//     value:  1.09
//     key:  shopping_hours
//     value:  0.04
//     key:  utilities_hours
//     value:  0.48
//     key:  total_duration_formatted
//     value:  11h 38m
//     key:  very_productive_duration_formatted
//     value:  5h 16m
//     key:  productive_duration_formatted
//     value:  18m 21s
//     key:  neutral_duration_formatted
//     value:  20m 5s
//     key:  distracting_duration_formatted
//     value:  'no time'
//     key:  very_distracting_duration_formatted
//     value:  5h 43m
//     key:  all_productive_duration_formatted
//     value:  5h 34m
//     key:  all_distracting_duration_formatted
//     value:  5h 43m
//     key:  uncategorized_duration_formatted
//     value:  4m 27s
//     key:  business_duration_formatted
//     value:  29m 46s
//     key:  communication_and_scheduling_duration_formatted
//     value:  29m 31s
//     key:  social_networking_duration_formatted
//     value:  1m 49s
//     key:  design_and_composition_duration_formatted
//     value:  'no time'
//     key:  entertainment_duration_formatted
//     value:  5h 41m
//     key:  news_duration_formatted
//     value:  2m 56s
//     key:  software_development_duration_formatted
//     value:  3h 11m
//     key:  reference_and_learning_duration_formatted
//     value:  1h 5m
//     key:  shopping_duration_formatted
//     value:  2m 21s
//     key:  utilities_duration_formatted
//     value:  28m 50s
//   },
//   {
//     date: '2018-01-17'
//     info: {
//     key:  id
//     value:  1516176000
//     key:  productivity_pulse
//     value:  89
//     key:  very_productive_percentage
//     value:  87.6
//     key:  productive_percentage
//     value:  0.7
//     key:  neutral_percentage
//     value:  2.6
//     key:  distracting_percentage
//     value:  0
//     key:  very_distracting_percentage
//     value:  9
//     key:  all_productive_percentage
//     value:  88.3
//     key:  all_distracting_percentage
//     value:  9.1
//     key:  uncategorized_percentage
//     value:  0.8
//     key:  business_percentage
//     value:  2.6
//     key:  communication_and_scheduling_percentage
//     value:  10.1
//     key:  social_networking_percentage
//     value:  1.4
//     key:  design_and_composition_percentage
//     value:  0.5
//     key:  entertainment_percentage
//     value:  0.9
//     key:  news_percentage
//     value:  4.5
//     key:  software_development_percentage
//     value:  63.8
//     key:  reference_and_learning_percentage
//     value:  10.6
//     key:  shopping_percentage
//     value:  2.6
//     key:  utilities_percentage
//     value:  2.1
//     key:  total_hours
//     value:  8.31
//     key:  very_productive_hours
//     value:  7.28
//     key:  productive_hours
//     value:  0.06
//     key:  neutral_hours
//     value:  0.22
//     key:  distracting_hours
//     value:  0
//     key:  very_distracting_hours
//     value:  0.75
//     key:  all_productive_hours
//     value:  7.34
//     key:  all_distracting_hours
//     value:  0.75
//     key:  uncategorized_hours
//     value:  0.07
//     key:  business_hours
//     value:  0.22
//     key:  communication_and_scheduling_hours
//     value:  0.84
//     key:  social_networking_hours
//     value:  0.12
//     key:  design_and_composition_hours
//     value:  0.04
//     key:  entertainment_hours
//     value:  0.08
//     key:  news_hours
//     value:  0.37
//     key:  software_development_hours
//     value:  5.3
//     key:  reference_and_learning_hours
//     value:  0.88
//     key:  shopping_hours
//     value:  0.22
//     key:  utilities_hours
//     value:  0.17
//     key:  total_duration_formatted
//     value:  8h 18m
//     key:  very_productive_duration_formatted
//     value:  7h 17m
//     key:  productive_duration_formatted
//     value:  3m 22s
//     key:  neutral_duration_formatted
//     value:  13m 4s
//     key:  distracting_duration_formatted
//     value:  10s
//     key:  very_distracting_duration_formatted
//     value:  45m 1s
//     key:  all_productive_duration_formatted
//     value:  7h 20m
//     key:  all_distracting_duration_formatted
//     value:  45m 11s
//     key:  uncategorized_duration_formatted
//     value:  4m 12s
//     key:  business_duration_formatted
//     value:  12m 57s
//     key:  communication_and_scheduling_duration_formatted
//     value:  50m 25s
//     key:  social_networking_duration_formatted
//     value:  7m 3s
//     key:  design_and_composition_duration_formatted
//     value:  2m 23s
//     key:  entertainment_duration_formatted
//     value:  4m 34s
//     key:  news_duration_formatted
//     value:  22m 19s
//     key:  software_development_duration_formatted
//     value:  5h 18m
//     key:  reference_and_learning_duration_formatted
//     value:  53m 3s
//     key:  shopping_duration_formatted
//     value:  13m 11s
//     key:  utilities_duration_formatted
//     value:  10m 18s
//     }
//   },
//   {
//     date: '2018-01-16'
//     info: {
//     key:  id
//     value:  1516089600
//     key:  productivity_pulse
//     value:  88
//     key:  very_productive_percentage
//     value:  85.2
//     key:  productive_percentage
//     value:  1.9
//     key:  neutral_percentage
//     value:  4.6
//     key:  distracting_percentage
//     value:  0
//     key:  very_distracting_percentage
//     value:  8.2
//     key:  all_productive_percentage
//     value:  87.1
//     key:  all_distracting_percentage
//     value:  8.2
//     key:  uncategorized_percentage
//     value:  1.7
//     key:  business_percentage
//     value:  0.8
//     key:  communication_and_scheduling_percentage
//     value:  24.5
//     key:  social_networking_percentage
//     value:  0
//     key:  design_and_composition_percentage
//     value:  0
//     key:  entertainment_percentage
//     value:  8.2
//     key:  news_percentage
//     value:  0.2
//     key:  software_development_percentage
//     value:  51.2
//     key:  reference_and_learning_percentage
//     value:  8.6
//     key:  shopping_percentage
//     value:  0
//     key:  utilities_percentage
//     value:  4.7
//     key:  total_hours
//     value:  11.45
//     key:  very_productive_hours
//     value:  9.76
//     key:  productive_hours
//     value:  0.22
//     key:  neutral_hours
//     value:  0.53
//     key:  distracting_hours
//     value:  0
//     key:  very_distracting_hours
//     value:  0.94
//     key:  all_productive_hours
//     value:  9.98
//     key:  all_distracting_hours
//     value:  0.94
//     key:  uncategorized_hours
//     value:  0.2
//     key:  business_hours
//     value:  0.1
//     key:  communication_and_scheduling_hours
//     value:  2.81
//     key:  social_networking_hours
//     value:  0
//     key:  design_and_composition_hours
//     value:  0
//     key:  entertainment_hours
//     value:  0.94
//     key:  news_hours
//     value:  0.02
//     key:  software_development_hours
//     value:  5.86
//     key:  reference_and_learning_hours
//     value:  0.99
//     key:  shopping_hours
//     value:  0
//     key:  utilities_hours
//     value:  0.53
//     key:  total_duration_formatted
//     value:  11h 27m
//     key:  very_productive_duration_formatted
//     value:  9h 45m
//     key:  productive_duration_formatted
//     value:  13m 8s
//     key:  neutral_duration_formatted
//     value:  31m 54s
//     key:  distracting_duration_formatted
//     value:  'no time'
//     key:  very_distracting_duration_formatted
//     value:  56m 40s
//     key:  all_productive_duration_formatted
//     value:  9h 58m
//     key:  all_distracting_duration_formatted
//     value:  56m 40s
//     key:  uncategorized_duration_formatted
//     value:  11m 53s
//     key:  business_duration_formatted
//     value:  5m 49s
//     key:  communication_and_scheduling_duration_formatted
//     value:  2h 48m
//     key:  social_networking_duration_formatted
//     value:  17s
//     key:  design_and_composition_duration_formatted
//     value:  'no time'
//     key:  entertainment_duration_formatted
//     value:  56m 23s
//     key:  news_duration_formatted
//     value:  1m 2s
//     key:  software_development_duration_formatted
//     value:  5h 51m
//     key:  reference_and_learning_duration_formatted
//     value:  59m 9s
//     key:  shopping_duration_formatted
//     value:  2s
//     key:  utilities_duration_formatted
//     value:  32m 5s
//     }
//   },
//   {
//     date: '2018-01-15'
//     info: {
//     key:  id
//     value:  1516003200
//     key:  productivity_pulse
//     value:  63
//     key:  very_productive_percentage
//     value:  59.2
//     key:  productive_percentage
//     value:  3.6
//     key:  neutral_percentage
//     value:  3.7
//     key:  distracting_percentage
//     value:  0.3
//     key:  very_distracting_percentage
//     value:  33.2
//     key:  all_productive_percentage
//     value:  62.8
//     key:  all_distracting_percentage
//     value:  33.5
//     key:  uncategorized_percentage
//     value:  1.6
//     key:  business_percentage
//     value:  6.7
//     key:  communication_and_scheduling_percentage
//     value:  10.2
//     key:  social_networking_percentage
//     value:  1.1
//     key:  design_and_composition_percentage
//     value:  0
//     key:  entertainment_percentage
//     value:  31.7
//     key:  news_percentage
//     value:  1.4
//     key:  software_development_percentage
//     value:  35.3
//     key:  reference_and_learning_percentage
//     value:  7
//     key:  shopping_percentage
//     value:  0.3
//     key:  utilities_percentage
//     value:  4.7
//     key:  total_hours
//     value:  6.58
//     key:  very_productive_hours
//     value:  3.9
//     key:  productive_hours
//     value:  0.24
//     key:  neutral_hours
//     value:  0.24
//     key:  distracting_hours
//     value:  0.02
//     key:  very_distracting_hours
//     value:  2.18
//     key:  all_productive_hours
//     value:  4.14
//     key:  all_distracting_hours
//     value:  2.2
//     key:  uncategorized_hours
//     value:  0.11
//     key:  business_hours
//     value:  0.44
//     key:  communication_and_scheduling_hours
//     value:  0.67
//     key:  social_networking_hours
//     value:  0.08
//     key:  design_and_composition_hours
//     value:  0
//     key:  entertainment_hours
//     value:  2.09
//     key:  news_hours
//     value:  0.09
//     key:  software_development_hours
//     value:  2.32
//     key:  reference_and_learning_hours
//     value:  0.46
//     key:  shopping_hours
//     value:  0.02
//     key:  utilities_hours
//     value:  0.31
//     key:  total_duration_formatted
//     value:  6h 35m
//     key:  very_productive_duration_formatted
//     value:  3h 53m
//     key:  productive_duration_formatted
//     value:  14m 15s
//     key:  neutral_duration_formatted
//     value:  14m 36s
//     key:  distracting_duration_formatted
//     value:  1m 16s
//     key:  very_distracting_duration_formatted
//     value:  2h 10m
//     key:  all_productive_duration_formatted
//     value:  4h 8m
//     key:  all_distracting_duration_formatted
//     value:  2h 12m
//     key:  uncategorized_duration_formatted
//     value:  6m 19s
//     key:  business_duration_formatted
//     value:  26m 34s
//     key:  communication_and_scheduling_duration_formatted
//     value:  40m 15s
//     key:  social_networking_duration_formatted
//     value:  4m 30s
//     key:  design_and_composition_duration_formatted
//     value:  'no time'
//     key:  entertainment_duration_formatted
//     value:  2h 5m
//     key:  news_duration_formatted
//     value:  5m 39s
//     key:  software_development_duration_formatted
//     value:  2h 19m
//     key:  reference_and_learning_duration_formatted
//     value:  27m 42s
//     key:  shopping_duration_formatted
//     value:  1m 2s
//     key:  utilities_duration_formatted
//     value:  18m 23s
//     }
//   },
//   {
//     date: '2018-01-14'
//     info: {
//     key:  id
//     value:  1515916800
//     key:  productivity_pulse
//     value:  73
//     key:  very_productive_percentage
//     value:  64.6
//     key:  productive_percentage
//     value:  2.3
//     key:  neutral_percentage
//     value:  14.7
//     key:  distracting_percentage
//     value:  0
//     key:  very_distracting_percentage
//     value:  18.4
//     key:  all_productive_percentage
//     value:  66.9
//     key:  all_distracting_percentage
//     value:  18.4
//     key:  uncategorized_percentage
//     value:  0.2
//     key:  business_percentage
//     value:  0
//     key:  communication_and_scheduling_percentage
//     value:  23.6
//     key:  social_networking_percentage
//     value:  0.3
//     key:  design_and_composition_percentage
//     value:  0
//     key:  entertainment_percentage
//     value:  29.3
//     key:  news_percentage
//     value:  1.1
//     key:  software_development_percentage
//     value:  31.9
//     key:  reference_and_learning_percentage
//     value:  9
//     key:  shopping_percentage
//     value:  0
//     key:  utilities_percentage
//     value:  4.5
//     key:  total_hours
//     value:  3.46
//     key:  very_productive_hours
//     value:  2.24
//     key:  productive_hours
//     value:  0.08
//     key:  neutral_hours
//     value:  0.51
//     key:  distracting_hours
//     value:  0
//     key:  very_distracting_hours
//     value:  0.64
//     key:  all_productive_hours
//     value:  2.32
//     key:  all_distracting_hours
//     value:  0.64
//     key:  uncategorized_hours
//     value:  0.01
//     key:  business_hours
//     value:  0
//     key:  communication_and_scheduling_hours
//     value:  0.82
//     key:  social_networking_hours
//     value:  0.01
//     key:  design_and_composition_hours
//     value:  0
//     key:  entertainment_hours
//     value:  1.01
//     key:  news_hours
//     value:  0.04
//     key:  software_development_hours
//     value:  1.11
//     key:  reference_and_learning_hours
//     value:  0.31
//     key:  shopping_hours
//     value:  0
//     key:  utilities_hours
//     value:  0.16
//     key:  total_duration_formatted
//     value:  3h 27m
//     key:  very_productive_duration_formatted
//     value:  2h 14m
//     key:  productive_duration_formatted
//     value:  4m 51s
//     key:  neutral_duration_formatted
//     value:  30m 35s
//     key:  distracting_duration_formatted
//     value:  'no time'
//     key:  very_distracting_duration_formatted
//     value:  38m 10s
//     key:  all_productive_duration_formatted
//     value:  2h 19m
//     key:  all_distracting_duration_formatted
//     value:  38m 10s
//     key:  uncategorized_duration_formatted
//     value:  30s
//     key:  business_duration_formatted
//     value:  'no time'
//     key:  communication_and_scheduling_duration_formatted
//     value:  49m 6s
//     key:  social_networking_duration_formatted
//     value:  36s
//     key:  design_and_composition_duration_formatted
//     value:  'no time'
//     key:  entertainment_duration_formatted
//     value:  1h
//     key:  news_duration_formatted
//     value:  2m 16s
//     key:  software_development_duration_formatted
//     value:  1h 6m
//     key:  reference_and_learning_duration_formatted
//     value:  18m 47s
//     key:  shopping_duration_formatted
//     value:  6s
//     key:  utilities_duration_formatted
//     value:  9m 19s
//     }
//   },
//   {
//     date: '2018-01-13'
//     info: {
//     key:  id
//     value:  1515830400
//     key:  productivity_pulse
//     value:  78
//     key:  very_productive_percentage
//     value:  61.3
//     key:  productive_percentage
//     value:  1
//     key:  neutral_percentage
//     value:  32.7
//     key:  distracting_percentage
//     value:  0
//     key:  very_distracting_percentage
//     value:  5
//     key:  all_productive_percentage
//     value:  62.3
//     key:  all_distracting_percentage
//     value:  5
//     key:  uncategorized_percentage
//     value:  31.2
//     key:  business_percentage
//     value:  0
//     key:  communication_and_scheduling_percentage
//     value:  5.4
//     key:  social_networking_percentage
//     value:  1.6
//     key:  design_and_composition_percentage
//     value:  0
//     key:  entertainment_percentage
//     value:  2.3
//     key:  news_percentage
//     value:  1.1
//     key:  software_development_percentage
//     value:  48.1
//     key:  reference_and_learning_percentage
//     value:  7.8
//     key:  shopping_percentage
//     value:  0
//     key:  utilities_percentage
//     value:  2.5
//     key:  total_hours
//     value:  7.39
//     key:  very_productive_hours
//     value:  4.53
//     key:  productive_hours
//     value:  0.07
//     key:  neutral_hours
//     value:  2.42
//     key:  distracting_hours
//     value:  0
//     key:  very_distracting_hours
//     value:  0.37
//     key:  all_productive_hours
//     value:  4.6
//     key:  all_distracting_hours
//     value:  0.37
//     key:  uncategorized_hours
//     value:  2.31
//     key:  business_hours
//     value:  0
//     key:  communication_and_scheduling_hours
//     value:  0.4
//     key:  social_networking_hours
//     value:  0.12
//     key:  design_and_composition_hours
//     value:  0
//     key:  entertainment_hours
//     value:  0.17
//     key:  news_hours
//     value:  0.08
//     key:  software_development_hours
//     value:  3.56
//     key:  reference_and_learning_hours
//     value:  0.57
//     key:  shopping_hours
//     value:  0
//     key:  utilities_hours
//     value:  0.19
//     key:  total_duration_formatted
//     value:  7h 23m
//     key:  very_productive_duration_formatted
//     value:  4h 31m
//     key:  productive_duration_formatted
//     value:  4m 17s
//     key:  neutral_duration_formatted
//     value:  2h 25m
//     key:  distracting_duration_formatted
//     value:  'no time'
//     key:  very_distracting_duration_formatted
//     value:  21m 58s
//     key:  all_productive_duration_formatted
//     value:  4h 36m
//     key:  all_distracting_duration_formatted
//     value:  21m 58s
//     key:  uncategorized_duration_formatted
//     value:  2h 18m
//     key:  business_duration_formatted
//     value:  'no time'
//     key:  communication_and_scheduling_duration_formatted
//     value:  24m 7s
//     key:  social_networking_duration_formatted
//     value:  6m 57s
//     key:  design_and_composition_duration_formatted
//     value:  'no time'
//     key:  entertainment_duration_formatted
//     value:  10m 17s
//     key:  news_duration_formatted
//     value:  4m 44s
//     key:  software_development_duration_formatted
//     value:  3h 33m
//     key:  reference_and_learning_duration_formatted
//     value:  34m 25s
//     key:  shopping_duration_formatted
//     value:  'no time'
//     key:  utilities_duration_formatted
//     value:  11m 7s
//     }
//   },
//   {
//     date: '2018-01-12'
//     info: {
//     key:  id
//     value:  1515744000
//     key:  productivity_pulse
//     value:  69
//     key:  very_productive_percentage
//     value:  51.1
//     key:  productive_percentage
//     value:  6.3
//     key:  neutral_percentage
//     value:  27.7
//     key:  distracting_percentage
//     value:  0
//     key:  very_distracting_percentage
//     value:  14.9
//     key:  all_productive_percentage
//     value:  57.4
//     key:  all_distracting_percentage
//     value:  14.9
//     key:  uncategorized_percentage
//     value:  26.2
//     key:  business_percentage
//     value:  1.4
//     key:  communication_and_scheduling_percentage
//     value:  16
//     key:  social_networking_percentage
//     value:  9.5
//     key:  design_and_composition_percentage
//     value:  0
//     key:  entertainment_percentage
//     value:  2.7
//     key:  news_percentage
//     value:  1.1
//     key:  software_development_percentage
//     value:  25.5
//     key:  reference_and_learning_percentage
//     value:  8.2
//     key:  shopping_percentage
//     value:  1.6
//     key:  utilities_percentage
//     value:  7.8
//     key:  total_hours
//     value:  9.72
//     key:  very_productive_hours
//     value:  4.97
//     key:  productive_hours
//     value:  0.61
//     key:  neutral_hours
//     value:  2.69
//     key:  distracting_hours
//     value:  0
//     key:  very_distracting_hours
//     value:  1.45
//     key:  all_productive_hours
//     value:  5.58
//     key:  all_distracting_hours
//     value:  1.45
//     key:  uncategorized_hours
//     value:  2.55
//     key:  business_hours
//     value:  0.13
//     key:  communication_and_scheduling_hours
//     value:  1.56
//     key:  social_networking_hours
//     value:  0.93
//     key:  design_and_composition_hours
//     value:  0
//     key:  entertainment_hours
//     value:  0.26
//     key:  news_hours
//     value:  0.11
//     key:  software_development_hours
//     value:  2.48
//     key:  reference_and_learning_hours
//     value:  0.8
//     key:  shopping_hours
//     value:  0.16
//     key:  utilities_hours
//     value:  0.75
//     key:  total_duration_formatted
//     value:  9h 43m
//     key:  very_productive_duration_formatted
//     value:  4h 58m
//     key:  productive_duration_formatted
//     value:  36m 39s
//     key:  neutral_duration_formatted
//     value:  2h 41m
//     key:  distracting_duration_formatted
//     value:  'no time'
//     key:  very_distracting_duration_formatted
//     value:  1h 27m
//     key:  all_productive_duration_formatted
//     value:  5h 34m
//     key:  all_distracting_duration_formatted
//     value:  1h 27m
//     key:  uncategorized_duration_formatted
//     value:  2h 32m
//     key:  business_duration_formatted
//     value:  7m 56s
//     key:  communication_and_scheduling_duration_formatted
//     value:  1h 33m
//     key:  social_networking_duration_formatted
//     value:  55m 37s
//     key:  design_and_composition_duration_formatted
//     value:  8s
//     key:  entertainment_duration_formatted
//     value:  15m 31s
//     key:  news_duration_formatted
//     value:  6m 32s
//     key:  software_development_duration_formatted
//     value:  2h 28m
//     key:  reference_and_learning_duration_formatted
//     value:  48m 3s
//     key:  shopping_duration_formatted
//     value:  9m 27s
//     key:  utilities_duration_formatted
//     value:  45m 17s
//     }
//   },
//   {
//     date: '2018-01-11'
//     info: {
//     key:  id
//     value:  1515657600
//     key:  productivity_pulse
//     value:  63
//     key:  very_productive_percentage
//     value:  33.2
//     key:  productive_percentage
//     value:  5.1
//     key:  neutral_percentage
//     value:  52.4
//     key:  distracting_percentage
//     value:  0
//     key:  very_distracting_percentage
//     value:  9.3
//     key:  all_productive_percentage
//     value:  38.3
//     key:  all_distracting_percentage
//     value:  9.3
//     key:  uncategorized_percentage
//     value:  51
//     key:  business_percentage
//     value:  2.7
//     key:  communication_and_scheduling_percentage
//     value:  18.1
//     key:  social_networking_percentage
//     value:  6.6
//     key:  design_and_composition_percentage
//     value:  0
//     key:  entertainment_percentage
//     value:  1
//     key:  news_percentage
//     value:  1.5
//     key:  software_development_percentage
//     value:  10.9
//     key:  reference_and_learning_percentage
//     value:  1.4
//     key:  shopping_percentage
//     value:  0.2
//     key:  utilities_percentage
//     value:  6.5
//     key:  total_hours
//     value:  7.98
//     key:  very_productive_hours
//     value:  2.65
//     key:  productive_hours
//     value:  0.4
//     key:  neutral_hours
//     value:  4.19
//     key:  distracting_hours
//     value:  0
//     key:  very_distracting_hours
//     value:  0.74
//     key:  all_productive_hours
//     value:  3.06
//     key:  all_distracting_hours
//     value:  0.74
//     key:  uncategorized_hours
//     value:  4.07
//     key:  business_hours
//     value:  0.22
//     key:  communication_and_scheduling_hours
//     value:  1.45
//     key:  social_networking_hours
//     value:  0.53
//     key:  design_and_composition_hours
//     value:  0
//     key:  entertainment_hours
//     value:  0.08
//     key:  news_hours
//     value:  0.12
//     key:  software_development_hours
//     value:  0.87
//     key:  reference_and_learning_hours
//     value:  0.11
//     key:  shopping_hours
//     value:  0.02
//     key:  utilities_hours
//     value:  0.52
//     key:  total_duration_formatted
//     value:  7h 59m
//     key:  very_productive_duration_formatted
//     value:  2h 39m
//     key:  productive_duration_formatted
//     value:  24m 16s
//     key:  neutral_duration_formatted
//     value:  4h 11m
//     key:  distracting_duration_formatted
//     value:  'no time'
//     key:  very_distracting_duration_formatted
//     value:  44m 33s
//     key:  all_productive_duration_formatted
//     value:  3h 3m
//     key:  all_distracting_duration_formatted
//     value:  44m 33s
//     key:  uncategorized_duration_formatted
//     value:  4h 4m
//     key:  business_duration_formatted
//     value:  13m 5s
//     key:  communication_and_scheduling_duration_formatted
//     value:  1h 26m
//     key:  social_networking_duration_formatted
//     value:  31m 46s
//     key:  design_and_composition_duration_formatted
//     value:  'no time'
//     key:  entertainment_duration_formatted
//     value:  4m 53s
//     key:  news_duration_formatted
//     value:  6m 57s
//     key:  software_development_duration_formatted
//     value:  52m 24s
//     key:  reference_and_learning_duration_formatted
//     value:  6m 49s
//     key:  shopping_duration_formatted
//     value:  57s
//     key:  utilities_duration_formatted
//     value:  31m 9s
//     }
//   },
//   {
//     date: '2018-01-10'
//     info: {
//     key:  id
//     value:  1515571200
//     key:  productivity_pulse
//     value:  50
//     key:  very_productive_percentage
//     value:  7.8
//     key:  productive_percentage
//     value:  5.8
//     key:  neutral_percentage
//     value:  76.7
//     key:  distracting_percentage
//     value:  0
//     key:  very_distracting_percentage
//     value:  9.7
//     key:  all_productive_percentage
//     value:  13.6
//     key:  all_distracting_percentage
//     value:  9.7
//     key:  uncategorized_percentage
//     value:  76.6
//     key:  business_percentage
//     value:  0
//     key:  communication_and_scheduling_percentage
//     value:  6.6
//     key:  social_networking_percentage
//     value:  0.9
//     key:  design_and_composition_percentage
//     value:  0
//     key:  entertainment_percentage
//     value:  8.7
//     key:  news_percentage
//     value:  0
//     key:  software_development_percentage
//     value:  0.3
//     key:  reference_and_learning_percentage
//     value:  0.9
//     key:  shopping_percentage
//     value:  0
//     key:  utilities_percentage
//     value:  5.9
//     key:  total_hours
//     value:  2.35
//     key:  very_productive_hours
//     value:  0.18
//     key:  productive_hours
//     value:  0.14
//     key:  neutral_hours
//     value:  1.81
//     key:  distracting_hours
//     value:  0
//     key:  very_distracting_hours
//     value:  0.23
//     key:  all_productive_hours
//     value:  0.32
//     key:  all_distracting_hours
//     value:  0.23
//     key:  uncategorized_hours
//     value:  1.8
//     key:  business_hours
//     value:  0
//     key:  communication_and_scheduling_hours
//     value:  0.16
//     key:  social_networking_hours
//     value:  0.02
//     key:  design_and_composition_hours
//     value:  0
//     key:  entertainment_hours
//     value:  0.21
//     key:  news_hours
//     value:  0
//     key:  software_development_hours
//     value:  0.01
//     key:  reference_and_learning_hours
//     value:  0.02
//     key:  shopping_hours
//     value:  0
//     key:  utilities_hours
//     value:  0.14
//     key:  total_duration_formatted
//     value:  2h 21m
//     key:  very_productive_duration_formatted
//     value:  11m 2s
//     key:  productive_duration_formatted
//     value:  8m 14s
//     key:  neutral_duration_formatted
//     value:  1h 48m
//     key:  distracting_duration_formatted
//     value:  'no time'
//     key:  very_distracting_duration_formatted
//     value:  13m 38s
//     key:  all_productive_duration_formatted
//     value:  19m 16s
//     key:  all_distracting_duration_formatted
//     value:  13m 38s
//     key:  uncategorized_duration_formatted
//     value:  1h 48m
//     key:  business_duration_formatted
//     value:  'no time'
//     key:  communication_and_scheduling_duration_formatted
//     value:  9m 21s
//     key:  social_networking_duration_formatted
//     value:  1m 19s
//     key:  design_and_composition_duration_formatted
//     value:  'no time'
//     key:  entertainment_duration_formatted
//     value:  12m 19s
//     key:  news_duration_formatted
//     value:  'no time'
//     key:  software_development_duration_formatted
//     value:  23s
//     key:  reference_and_learning_duration_formatted
//     value:  1m 18s
//     key:  shopping_duration_formatted
//     value:  'no time'
//     key:  utilities_duration_formatted
//     value:  8m 23s
//     }
//   },
//   {
//     date: '2018-01-09'
//     info: {
//     key:  id
//     value:  1515484800
//     key:  productivity_pulse
//     value:  80
//     key:  very_productive_percentage
//     value:  61.8
//     key:  productive_percentage
//     value:  5.4
//     key:  neutral_percentage
//     value:  29.6
//     key:  distracting_percentage
//     value:  0
//     key:  very_distracting_percentage
//     value:  3.2
//     key:  all_productive_percentage
//     value:  67.2
//     key:  all_distracting_percentage
//     value:  3.2
//     key:  uncategorized_percentage
//     value:  21.8
//     key:  business_percentage
//     value:  0.2
//     key:  communication_and_scheduling_percentage
//     value:  12.1
//     key:  social_networking_percentage
//     value:  0
//     key:  design_and_composition_percentage
//     value:  0
//     key:  entertainment_percentage
//     value:  3.1
//     key:  news_percentage
//     value:  0
//     key:  software_development_percentage
//     value:  0
//     key:  reference_and_learning_percentage
//     value:  49.5
//     key:  shopping_percentage
//     value:  0.1
//     key:  utilities_percentage
//     value:  13.2
//     key:  total_hours
//     value:  1.02
//     key:  very_productive_hours
//     value:  0.63
//     key:  productive_hours
//     value:  0.06
//     key:  neutral_hours
//     value:  0.3
//     key:  distracting_hours
//     value:  0
//     key:  very_distracting_hours
//     value:  0.03
//     key:  all_productive_hours
//     value:  0.69
//     key:  all_distracting_hours
//     value:  0.03
//     key:  uncategorized_hours
//     value:  0.22
//     key:  business_hours
//     value:  0
//     key:  communication_and_scheduling_hours
//     value:  0.12
//     key:  social_networking_hours
//     value:  0
//     key:  design_and_composition_hours
//     value:  0
//     key:  entertainment_hours
//     value:  0.03
//     key:  news_hours
//     value:  0
//     key:  software_development_hours
//     value:  0
//     key:  reference_and_learning_hours
//     value:  0.51
//     key:  shopping_hours
//     value:  0
//     key:  utilities_hours
//     value:  0.14
//     key:  total_duration_formatted
//     value:  1h 1m
//     key:  very_productive_duration_formatted
//     value:  38m
//     key:  productive_duration_formatted
//     value:  3m 18s
//     key:  neutral_duration_formatted
//     value:  18m 13s
//     key:  distracting_duration_formatted
//     value:  'no time'
//     key:  very_distracting_duration_formatted
//     value:  1m 57s
//     key:  all_productive_duration_formatted
//     value:  41m 18s
//     key:  all_distracting_duration_formatted
//     value:  1m 57s
//     key:  uncategorized_duration_formatted
//     value:  13m 23s
//     key:  business_duration_formatted
//     value:  8s
//     key:  communication_and_scheduling_duration_formatted
//     value:  7m 25s
//     key:  social_networking_duration_formatted
//     value:  'no time'
//     key:  design_and_composition_duration_formatted
//     value:  'no time'
//     key:  entertainment_duration_formatted
//     value:  1m 53s
//     key:  news_duration_formatted
//     value:  'no time'
//     key:  software_development_duration_formatted
//     value:  'no time'
//     key:  reference_and_learning_duration_formatted
//     value:  30m 27s
//     key:  shopping_duration_formatted
//     value:  4s
//     key:  utilities_duration_formatted
//     value:  8m 8s
//     }
//   },
//   {
//     date: '2018-01-08'
//     info: {
//     key:  id
//     value:  1515398400
//     key:  productivity_pulse
//     value:  97
//     key:  very_productive_percentage
//     value:  89.8
//     key:  productive_percentage
//     value:  10.2
//     key:  neutral_percentage
//     value:  0
//     key:  distracting_percentage
//     value:  0
//     key:  very_distracting_percentage
//     value:  0
//     key:  all_productive_percentage
//     value:  100
//     key:  all_distracting_percentage
//     value:  0
//     key:  uncategorized_percentage
//     value:  0
//     key:  business_percentage
//     value:  0
//     key:  communication_and_scheduling_percentage
//     value:  26.1
//     key:  social_networking_percentage
//     value:  0
//     key:  design_and_composition_percentage
//     value:  0
//     key:  entertainment_percentage
//     value:  0
//     key:  news_percentage
//     value:  0
//     key:  software_development_percentage
//     value:  0
//     key:  reference_and_learning_percentage
//     value:  63.7
//     key:  shopping_percentage
//     value:  0
//     key:  utilities_percentage
//     value:  10.2
//     key:  total_hours
//     value:  0.11
//     key:  very_productive_hours
//     value:  0.1
//     key:  productive_hours
//     value:  0.01
//     key:  neutral_hours
//     value:  0
//     key:  distracting_hours
//     value:  0
//     key:  very_distracting_hours
//     value:  0
//     key:  all_productive_hours
//     value:  0.11
//     key:  all_distracting_hours
//     value:  0
//     key:  uncategorized_hours
//     value:  0
//     key:  business_hours
//     value:  0
//     key:  communication_and_scheduling_hours
//     value:  0.03
//     key:  social_networking_hours
//     value:  0
//     key:  design_and_composition_hours
//     value:  0
//     key:  entertainment_hours
//     value:  0
//     key:  news_hours
//     value:  0
//     key:  software_development_hours
//     value:  0
//     key:  reference_and_learning_hours
//     value:  0.07
//     key:  shopping_hours
//     value:  0
//     key:  utilities_hours
//     value:  0.01
//     key:  total_duration_formatted
//     value:  6m 42s
//     key:  very_productive_duration_formatted
//     value:  6m 1s
//     key:  productive_duration_formatted
//     value:  41s
//     key:  neutral_duration_formatted
//     value:  'no time'
//     key:  distracting_duration_formatted
//     value:  'no time'
//     key:  very_distracting_duration_formatted
//     value:  'no time'
//     key:  all_productive_duration_formatted
//     value:  6m 42s
//     key:  all_distracting_duration_formatted
//     value:  'no time'
//     key:  uncategorized_duration_formatted
//     value:  'no time'
//     key:  business_duration_formatted
//     value:  'no time'
//     key:  communication_and_scheduling_duration_formatted
//     value:  1m 45s
//     key:  social_networking_duration_formatted
//     value:  'no time'
//     key:  design_and_composition_duration_formatted
//     value:  'no time'
//     key:  entertainment_duration_formatted
//     value:  'no time'
//     key:  news_duration_formatted
//     value:  'no time'
//     key:  software_development_duration_formatted
//     value:  'no time'
//     key:  reference_and_learning_duration_formatted
//     value:  4m 16s
//     key:  shopping_duration_formatted
//     value:  'no time'
//     key:  utilities_duration_formatted
//     value:  41s
//     }
//   },
//   {
//     date: '2018-01-07'
//     info: {
//       key:  id
//       value:  1515312000
//       key:  productivity_pulse
//       value:  73
//       key:  very_productive_percentage
//       value:  63
//       key:  productive_percentage
//       value:  1.7
//       key:  neutral_percentage
//       value:  18.2
//       key:  distracting_percentage
//       value:  0
//       key:  very_distracting_percentage
//       value:  17.2
//       key:  all_productive_percentage
//       value:  64.7
//       key:  all_distracting_percentage
//       value:  17.2
//       key:  uncategorized_percentage
//       value:  15.1
//       key:  business_percentage
//       value:  0.7
//       key:  communication_and_scheduling_percentage
//       value:  6.4
//       key:  social_networking_percentage
//       value:  2.3
//       key:  design_and_composition_percentage
//       value:  1.2
//       key:  entertainment_percentage
//       value:  12.7
//       key:  news_percentage
//       value:  1.6
//       key:  software_development_percentage
//       value:  40.8
//       key:  reference_and_learning_percentage
//       value:  13.8
//       key:  shopping_percentage
//       value:  0.6
//       key:  utilities_percentage
//       value:  4.7
//       key:  total_hours
//       value:  4.09
//       key:  very_productive_hours
//       value:  2.58
//       key:  productive_hours
//       value:  0.07
//       key:  neutral_hours
//       value:  0.74
//       key:  distracting_hours
//       value:  0
//       key:  very_distracting_hours
//       value:  0.7
//       key:  all_productive_hours
//       value:  2.65
//       key:  all_distracting_hours
//       value:  0.7
//       key:  uncategorized_hours
//       value:  0.62
//       key:  business_hours
//       value:  0.03
//       key:  communication_and_scheduling_hours
//       value:  0.26
//       key:  social_networking_hours
//       value:  0.09
//       key:  design_and_composition_hours
//       value:  0.05
//       key:  entertainment_hours
//       value:  0.52
//       key:  news_hours
//       value:  0.07
//       key:  software_development_hours
//       value:  1.67
//       key:  reference_and_learning_hours
//       value:  0.57
//       key:  shopping_hours
//       value:  0.02
//       key:  utilities_hours
//       value:  0.19
//       key:  total_duration_formatted
//       value:  4h 5m
//       key:  very_productive_duration_formatted
//       value:  2h 34m
//       key:  productive_duration_formatted
//       value:  4m 9s
//       key:  neutral_duration_formatted
//       value:  44m 38s
//       key:  distracting_duration_formatted
//       value:  'no time'
//       key:  very_distracting_duration_formatted
//       value:  42m 11s
//       key:  all_productive_duration_formatted
//       value:  2h 38m
//       key:  all_distracting_duration_formatted
//       value:  42m 11s
//       key:  uncategorized_duration_formatted
//       value:  37m 8s
//       key:  business_duration_formatted
//       value:  1m 49s
//       key:  communication_and_scheduling_duration_formatted
//       value:  15m 50s
//       key:  social_networking_duration_formatted
//       value:  5m 40s
//       key:  design_and_composition_duration_formatted
//       value:  2m 55s
//       key:  entertainment_duration_formatted
//       value:  31m 11s
//       key:  news_duration_formatted
//       value:  3m 56s
//       key:  software_development_duration_formatted
//       value:  1h 40m
//       key:  reference_and_learning_duration_formatted
//       value:  33m 57s
//       key:  shopping_duration_formatted
//       value:  1m 24s
//       key:  utilities_duration_formatted
//       value:  11m 39s
//     }
//   }
]
