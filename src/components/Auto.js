import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ShowData } from './Getdata';


const items = [{
    id: 1111,
    name: 'Chief Executives and Managing Directors'
},
{
    id: 1112,
    name: 'General Managers'
},
{
    id: 1213,
    name: 'Livestock Farmers'
},
{
    id: 1214,
    name: 'Mixed Crop and Livestock Farmers'
},
{
    id: 1321,
    name: 'Corporate Services Managers'
},
{
    id: 1322,
    name: 'Finance Managers'
},
{
    id: 1323,
    name: 'Human Resource Managers'
},
{
    id: 1324,
    name: 'Policy and Planning Managers'
},
{
    id: 1325,
    name: 'Research and Development Managers'
},
{
    id: 1331,
    name: 'Construction Managers'
},
{
    id: 1332,
    name: 'Engineering Managers'
},
{
    id: 1333,
    name: 'Importers, Exporters and Wholesalers'
},
{
    id: 1336,
    name: 'Supply, Distribution and Procurement Managers'
},
{
    id: 1341,
    name: 'Child Care Centre Managers'
},
{
    id: 1342,
    name: 'Health and Welfare Services Managers'
},
{
    id: 1343,
    name: 'School Principals'
},
{
    id: 1344,
    name: 'Education Managers'
},
{
    id: 1351,
    name: 'ICT Managers'
},
{
    id: 1411,
    name: 'Cafe and Restaurant Managers'
},
{
    id: 1413,
    name: 'Hotel and Motel Managers'
},
{
    id: 1414,
    name: 'Licensed Club Managers'
},
{
    id: 1421,
    name: 'Retail Managers'
},
{
    id: 1491,
    name: 'Amusement, Fitness and Sports Centre Managers'
},
{
    id: 1493,
    name: 'Conference and Event Organisers'
},
{
    id: 2113,
    name: 'Photographers'
},
{
    id: 2114,
    name: 'Visual Arts and Crafts Professionals'
},
{
    id: 2123,
    name: 'Film, Television, Radio and Stage Directors'
},
{
    id: 2124,
    name: 'Journalists and Writers'
},
{
    id: 2221,
    name: 'Financial Brokers'
},
{
    id: 2222,
    name: 'Financial Dealers'
},
{
    id: 2232,
    name: 'ICT Trainers'
},
{
    id: 2233,
    name: 'Training and Development Professionals'
},
{
    id: 2243,
    name: 'Economists'
},
{
    id: 2245,
    name: 'Land Economists and Valuers'
},
{
    id: 2246,
    name: 'Librarians'
},
{
    id: 2251,
    name: 'Advertising and Marketing Professionals'
},
{
    id: 2252,
    name: 'ICT Sales Professionals'
},
{
    id: 2253,
    name: 'Public Relations Professionals'
},
{
    id: 2254,
    name: 'Technical Sales Representatives'
},
{
    id: 2311,
    name: 'Air Transport Professionals'
},
{
    id: 2322,
    name: 'Surveyors and Spatial Scientists'
},
{
    id: 2325,
    name: 'Interior Designers'
},
{
    id: 2326,
    name: 'Urban and Regional Planners'
},
{
    id: 2333,
    name: 'Electrical Engineers'
},
{
    id: 2334,
    name: 'Electronics Engineers'
},
{
    id: 2341,
    name: 'Agricultural and Forestry Scientists'
},
{
    id: 2344,
    name: 'Geologists, Geophysicists and Hydrogeologists'
},
{
    id: 2346,
    name: 'Medical Laboratory Scientists'
},
{
    id: 2347,
    name: 'Veterinarians'
},
{
    id: 2411,
    name: 'Early Childhood Teachers'
},
{
    id: 2412,
    name: 'Primary School Teachers'
},
{
    id: 2413,
    name: 'Middle School Teachers'
},
{
    id: 2414,
    name: 'Secondary School Teachers'
},
{
    id: 2415,
    name: 'Special Education Teachers'
},
{
    id: 2422,
    name: 'Vocational Education Teachers'
},
{
    id: 2491,
    name: 'Education Advisers and Reviewers'
},
{
    id: 2492,
    name: 'Private Art, Dance, Drama and Music Teachers'
},
{
    id: 2511,
    name: 'Nutrition Professionals'
},
{
    id: 2521,
    name: 'Chiropractors and Osteopaths'
},
{
    id: 2522,
    name: 'Complementary Health Therapists'
},
{
    id: 2523,
    name: 'Dental Practitioners'
},
{
    id: 2524,
    name: 'Occupational Therapists'
},
{
    id: 2525,
    name: 'Physiotherapists'
},
{
    id: 2526,
    name: 'Podiatrists'
},
{
    id: 2532,
    name: 'Anaesthetists'
},
{
    id: 2533,
    name: 'Specialist Physicians'
},
{
    id: 2534,
    name: 'Psychiatrists'
},
{
    id: 2535,
    name: 'Surgeons'
},
{
    id: 2541,
    name: 'Midwives'
},
{
    id: 2543,
    name: 'Nurse Managers'
},
{
    id: 2544,
    name: 'Registered Nurses'
},
{
    id: 2611,
    name: 'ICT Business and Systems Analysts'
},
{
    id: 2633,
    name: 'Telecommunications Engineering Professionals'
},
{
    id: 2711,
    name: 'Barristers'
},
{
    id: 2712,
    name: 'Judicial and Legal Professionals'
},
{
    id: 2713,
    name: 'Solicitors'
},
{
    id: 2721,
    name: 'Counsellors'
},
{
    id: 2722,
    name: 'Ministers of Religion'
},
{
    id: 2724,
    name: 'Social Professionals'
},
{
    id: 2725,
    name: 'Social Workers'
},
{
    id: 3111,
    name: 'Agricultural Technicians'
},
{
    id: 3113,
    name: 'Primary Products Inspectors'
},
{
    id: 3124,
    name: 'Electronic Engineering Draftspersons and Technicians'
},
{
    id: 3132,
    name: 'Telecommunications Technical Specialists'
},
{
    id: 3211,
    name: 'Automotive Electricians'
},
{
    id: 3221,
    name: 'Metal Casting, Forging and Finishing Trades Workers'
},
{
    id: 3222,
    name: 'Sheetmetal Trades Workers'
},
{
    id: 3241,
    name: 'Panelbeaters'
},
{
    id: 3242,
    name: 'Vehicle Body Builders and Trimmers'
},
{
    id: 3243,
    name: 'Vehicle Painters'
},
{
    id: 3321,
    name: 'Floor Finishers'
},
{
    id: 3322,
    name: 'Painting Trades Workers'
},
{
    id: 3331,
    name: 'Glaziers'
},
{
    id: 3333,
    name: 'Roof Tilers'
},
{
    id: 3334,
    name: 'Wall and Floor Tilers'
},
{
    id: 3411,
    name: 'Electricians'
},
{
    id: 3421,
    name: 'Airconditioning and Refrigeration Mechanics'
},
{
    id: 3422,
    name: 'Electrical Distribution Trades Workers'
},
{
    id: 3424,
    name: 'Telecommunications Trades Workers'
},
{
    id: 3511,
    name: 'Bakers and Pastrycooks'
},
{
    id: 3512,
    name: 'Butchers and Smallgoods Makers'
},
{
    id: 3513,
    name: 'Chefs'
},
{
    id: 3514,
    name: 'Cooks'
},
{
    id: 3611,
    name: 'Animal Attendants and Trainers'
},
{
    id: 3613,
    name: 'Veterinary Nurses'
},
{
    id: 3621,
    name: 'Florists'
},
{
    id: 3622,
    name: 'Gardeners'
},
{
    id: 3623,
    name: 'Greenkeepers'
},
{
    id: 3624,
    name: 'Nurserypersons'
},
{
    id: 3911,
    name: 'Hairdressers'
},
{
    id: 3922,
    name: 'Graphic Pre-press Trades Workers'
},
{
    id: 3923,
    name: 'Printers'
},
{
    id: 3933,
    name: 'Upholsterers'
},
{
    id: 3941,
    name: 'Cabinetmakers'
},
{
    id: 3991,
    name: 'Boat Builders and Shipwrights'
},
{
    id: 3994,
    name: 'Jewellers'
},
{
    id: 3996,
    name: 'Signwriters'
},
{
    id: 4111,
    name: 'Ambulance Officers and Paramedics'
},
{
    id: 4113,
    name: 'Diversional Therapists'
},
{
    id: 4115,
    name: 'Indigenous Health Workers'
},
{
    id: 4116,
    name: 'Massage Therapists'
},
{
    id: 4221,
    name: 'Education Aides'
},
{
    id: 4231,
    name: 'Aged and Disabled Carers'
},
{
    id: 4232,
    name: 'Dental Assistants'
},
{
    id: 4234,
    name: 'Special Care Workers'
},
{
    id: 4312,
    name: 'Cafe Workers'
},
{
    id: 4313,
    name: 'Gaming Workers'
},
{
    id: 4314,
    name: 'Hotel Service Managers'
},
{
    id: 4315,
    name: 'Waiters'
},
{
    id: 4421,
    name: 'Prison Officers'
},
{
    id: 4511,
    name: 'Beauty Therapists'
},
{
    id: 4512,
    name: 'Driving Instructors'
},
{
    id: 4513,
    name: 'Funeral Workers'
},
{
    id: 4514,
    name: 'Gallery, Museum and Tour Guides'
},
{
    id: 4517,
    name: 'Travel Attendants'
},
{
    id: 4521,
    name: 'Fitness Instructors'
},
{
    id: 4522,
    name: 'Outdoor Adventure Guides'
},
{
    id: 4523,
    name: 'Sports Coaches, Instructors and Officials'
},
{
    id: 4524,
    name: 'Sportspersons'
},
{
    id: 5121,
    name: 'Office Managers'
},
{
    id: 5211,
    name: 'Personal Assistants'
},
{
    id: 5311,
    name: 'General Clerks'
},
{
    id: 5412,
    name: 'Information Officers'
},
{
    id: 5512,
    name: 'Bookkeepers'
},
{
    id: 5513,
    name: 'Payroll Clerks'
},
{
    id: 5521,
    name: 'Bank Workers'
},
{
    id: 5522,
    name: 'Credit and Loans Officers'
},
{
    id: 5611,
    name: 'Betting Clerks'
},
{
    id: 5613,
    name: 'Filing and Registry Clerks'
},
{
    id: 5614,
    name: 'Mail Sorters'
},
{
    id: 5615,
    name: 'Survey Interviewers'
},
{
    id: 5616,
    name: 'Switchboard Operators'
},
{
    id: 5912,
    name: 'Transport and Despatch Clerks'
},
{
    id: 5991,
    name: 'Conveyancers and Legal Executives'
},
{
    id: 5992,
    name: 'Court and Legal Clerks'
},
{
    id: 5993,
    name: 'Debt Collectors'
},
{
    id: 5994,
    name: 'Human Resource Clerks'
},
{
    id: 5995,
    name: 'Inspectors and Regulatory Officers'
},
{
    id: 5996,
    name: 'Insurance Investigators, Loss Adjusters and Risk Surveyors'
},
{
    id: 5997,
    name: 'Library Assistants'
},
{
    id: 6111,
    name: 'Auctioneers, and Stock and Station Agents'
},
{
    id: 6112,
    name: 'Insurance Agents'
},
{
    id: 6113,
    name: 'Sales Representatives'
},
{
    id: 6211,
    name: 'Sales Assistants '
},
{
    id: 6214,
    name: 'Pharmacy Sales Assistants'
},
{
    id: 6215,
    name: 'Retail Supervisors'
},
{
    id: 6217,
    name: 'Street Vendors and Related Salespersons'
},
{
    id: 6311,
    name: 'Checkout Operators and Office Cashiers'
},
{
    id: 6393,
    name: 'Telemarketers'
},
{
    id: 6394,
    name: 'Ticket Salespersons'
},
{
    id: 6395,
    name: 'Visual Merchandisers'
},
{
    id: 7111,
    name: 'Clay, Concrete, Glass and Stone Processing Machine Operators'
},
{
    id: 7112,
    name: 'Industrial Spraypainters'
},
{
    id: 7113,
    name: 'Paper and Wood Processing Machine Operators'
},
{
    id: 7114,
    name: 'Photographic Developers and Printers'
},
{
    id: 7115,
    name: 'Plastics and Rubber Production Machine Operators'
},
{
    id: 7116,
    name: 'Sewing Machinists'
},
{
    id: 7117,
    name: 'Textile and Footwear Production Machine Operators'
},
{
    id: 7121,
    name: 'Crane, Hoist and Lift Operators'
},
{
    id: 7123,
    name: 'Engineering Production Workers'
},
{
    id: 7213,
    name: 'Forklift Drivers'
},
{
    id: 7311,
    name: 'Automobile Drivers'
},
{
    id: 7312,
    name: 'Bus and Coach Drivers'
},
{
    id: 7321,
    name: 'Delivery Drivers'
},
{
    id: 7331,
    name: 'Truck Drivers'
},
{
    id: 7411,
    name: 'Storepersons'
},
{
    id: 8111,
    name: 'Car Detailers'
},
{
    id: 8112,
    name: 'Commercial Cleaners'
},
{
    id: 8113,
    name: 'Domestic Cleaners'
},
{
    id: 8114,
    name: 'Housekeepers'
},
{
    id: 8115,
    name: 'Laundry Workers'
},
{
    id: 8212,
    name: 'Concreters'
},
{
    id: 8213,
    name: 'Fencers'
},
{
    id: 8215,
    name: 'Paving and Surfacing Labourers'
},
{
    id: 8216,
    name: 'Railway Track Workers'
},
{
    id: 8311,
    name: 'Food and Drink Factory Workers'
},
{
    id: 8313,
    name: 'Meat, Poultry and Seafood Process Workers'
},
{
    id: 8321,
    name: 'Packers'
},
{
    id: 8322,
    name: 'Product Assemblers'
},
{
    id: 8399,
    name: 'Factory Process Workers'
},
{
    id: 8412,
    name: 'Crop Farm Workers'
},
{
    id: 8414,
    name: 'Garden and Nursery Labourers'
},
{
    id: 8415,
    name: 'Livestock Farm Workers'
},
{
    id: 8416,
    name: 'Mixed Crop and Livestock Farm Workers'
},
{
    id: 8511,
    name: 'Fast Food Cooks'
},
{
    id: 8512,
    name: 'Food Trades Assistants'
},
{
    id: 8513,
    name: 'Kitchenhands'
},
{
    id: 8911,
    name: 'Freight and Furniture Handlers'
},
{
    id: 8912,
    name: 'Shelf Fillers'
},
{
    id: 8991,
    name: 'Caretakers'
},
{
    id: 8993,
    name: 'Handypersons'
},
{
    id: 8994,
    name: 'Motor Vehicle Parts and Accessories Fitters'
},
{
    id: 8996,
    name: 'Recycling and Rubbish Collectors'
},
{
    id: 8997,
    name: 'Vending Machine Attendants'
},
{
    id: 131112,
    name: 'Sales and Marketing Manager'
},
{
    id: 131113,
    name: 'Advertising Manager'
},
{
    id: 131114,
    name: 'Public Relations Manager'
},
{
    id: 133512,
    name: 'Production Manager in Manufacturing'
},
{
    id: 133513,
    name: 'Production Manager in Mining'
},
{
    id: 134411,
    name: 'Faculty Head'
},
{
    id: 135111,
    name: 'Chief Information Officer'
},
{
    id: 139912,
    name: 'Environmental Manager'
},
{
    id: 139913,
    name: 'Laboratory Manager'
},
{
    id: 139914,
    name: 'Quality Assurance Manager'
},
{
    id: 142114,
    name: 'Hair or Beauty Salon Manager'
},
{
    id: 142115,
    name: 'Post Office Manager'
},
{
    id: 149211,
    name: 'Call or Contact Centre Manager'
},
{
    id: 149212,
    name: 'Customer Service Manager'
},
{
    id: 149411,
    name: 'Fleet Manager'
},
{
    id: 149413,
    name: 'Transport Company Manager'
},
{
    id: 149913,
    name: 'Facilities Manager'
},
{
    id: 149914,
    name: 'Financial Institution Branch Manager'
},
{
    id: 211111,
    name: 'Actor'
},
{
    id: 211112,
    name: 'Dancer or Choreographer'
},
{
    id: 211113,
    name: 'Entertainer or Variety Artist'
},
{
    id: 211211,
    name: 'Composer'
},
{
    id: 211213,
    name: 'Musician'
},
{
    id: 211214,
    name: 'Singer'
},
{
    id: 212111,
    name: 'Artistic Director'
},
{
    id: 212112,
    name: 'Media Producer'
},
{
    id: 212113,
    name: 'Radio Presenter'
},
{
    id: 212211,
    name: 'Author'
},
{
    id: 212212,
    name: 'Book or Script Editor'
},
{
    id: 212314,
    name: 'Film and Video Editor'
},
{
    id: 212411,
    name: 'Copywriter'
},
{
    id: 212415,
    name: 'Technical Writer'
},
{
    id: 221111,
    name: 'Accountant  '
},
{
    id: 221112,
    name: 'Management Accountant'
},
{
    id: 221113,
    name: 'Taxation Accountant'
},
{
    id: 221212,
    name: 'Corporate Treasurer'
},
{
    id: 221213,
    name: 'External Auditor'
},
{
    id: 221214,
    name: 'Internal Auditor'
},
{
    id: 222111,
    name: 'Commodities Trader'
},
{
    id: 222311,
    name: 'Financial Investment Adviser'
},
{
    id: 222312,
    name: 'Financial Investment Manager'
},
{
    id: 223111,
    name: 'Human Resource Adviser'
},
{
    id: 223112,
    name: 'Recruitment Consultant'
},
{
    id: 223113,
    name: 'Workplace Relations Adviser'
},
{
    id: 224111,
    name: 'Actuary'
},
{
    id: 224112,
    name: 'Mathematician'
},
{
    id: 224113,
    name: 'Statistician'
},
{
    id: 224211,
    name: 'Archivist'
},
{
    id: 224212,
    name: 'Gallery or Museum Curator'
},
{
    id: 224213,
    name: 'Health Information Manager'
},
{
    id: 224214,
    name: 'Records Manager'
},
{
    id: 224411,
    name: 'Intelligence Officer'
},
{
    id: 224412,
    name: 'Policy Analyst'
},
{
    id: 224512,
    name: 'Valuer'
},
{
    id: 224711,
    name: 'Management Consultant'
},
{
    id: 224712,
    name: 'Organisation and Methods Analyst'
},
{
    id: 224912,
    name: 'Liaison Officer'
},
{
    id: 225112,
    name: 'Market Research Analyst'
},
{
    id: 225113,
    name: 'Marketing Specialist'
},
{
    id: 231111,
    name: 'Aeroplane Pilot'
},
{
    id: 231112,
    name: 'Air Traffic Controller'
},
{
    id: 231213,
    name: 'Ship\'s Master'
},
{
    id: 231214,
    name: 'Ship\'s Officer'
},
{
    id: 232111,
    name: 'Architect'
},
{
    id: 232112,
    name: 'Landscape Architect'
},
{
    id: 232311,
    name: 'Fashion Designer'
},
{
    id: 232312,
    name: 'Industrial Designer'
},
{
    id: 232411,
    name: 'Graphic Designer'
},
{
    id: 232412,
    name: 'Illustrator'
},
{
    id: 232413,
    name: 'Multimedia Designer'
},
{
    id: 232414,
    name: 'Web Designer'
},
{
    id: 233111,
    name: 'Chemical Engineer'
},
{
    id: 233112,
    name: 'Materials Engineer'
},
{
    id: 233211,
    name: 'Civil Engineer'
},
{
    id: 233212,
    name: 'Geotechnical Engineer'
},
{
    id: 233213,
    name: 'Quantity Surveyor'
},
{
    id: 233214,
    name: 'Structural Engineer'
},
{
    id: 233215,
    name: 'Transport Engineer'
},
{
    id: 233511,
    name: 'Industrial Engineer'
},
{
    id: 233512,
    name: 'Mechanical Engineer'
},
{
    id: 233513,
    name: 'Production or Plant Engineer'
},
{
    id: 233611,
    name: 'Mining Engineer '
},
{
    id: 233612,
    name: 'Petroleum Engineer'
},
{
    id: 233911,
    name: 'Aeronautical Engineer'
},
{
    id: 233913,
    name: 'Biomedical Engineer'
},
{
    id: 233914,
    name: 'Engineering Technologist'
},
{
    id: 233915,
    name: 'Environmental Engineer'
},
{
    id: 233916,
    name: 'Naval Architect'
},
{
    id: 234211,
    name: 'Chemist'
},
{
    id: 234212,
    name: 'Food Technologist'
},
{
    id: 234213,
    name: 'Wine Maker'
},
{
    id: 234311,
    name: 'Conservation Officer'
},
{
    id: 234312,
    name: 'Environmental Consultant'
},
{
    id: 234313,
    name: 'Environmental Research Scientist'
},
{
    id: 234314,
    name: 'Park Ranger'
},
{
    id: 234511,
    name: 'Life Scientist  '
},
{
    id: 234513,
    name: 'Biochemist'
},
{
    id: 234514,
    name: 'Biotechnologist'
},
{
    id: 234515,
    name: 'Botanist'
},
{
    id: 234517,
    name: 'Microbiologist'
},
{
    id: 234518,
    name: 'Zoologist'
},
{
    id: 234911,
    name: 'Conservator'
},
{
    id: 234912,
    name: 'Metallurgist'
},
{
    id: 234913,
    name: 'Meteorologist'
},
{
    id: 234914,
    name: 'Physicist'
},
{
    id: 242111,
    name: 'University Lecturer'
},
{
    id: 242112,
    name: 'University Tutor'
},
{
    id: 249212,
    name: 'Dance Teacher '
},
{
    id: 249214,
    name: 'Music Teacher '
},
{
    id: 251211,
    name: 'Medical Diagnostic Radiographer'
},
{
    id: 251212,
    name: 'Medical Radiation Therapist'
},
{
    id: 251213,
    name: 'Nuclear Medicine Technologist'
},
{
    id: 251214,
    name: 'Sonographer'
},
{
    id: 251311,
    name: 'Environmental Health Officer'
},
{
    id: 251312,
    name: 'Occupational Health and Safety Adviser'
},
{
    id: 251411,
    name: 'Optometrist'
},
{
    id: 251412,
    name: 'Orthoptist'
},
{
    id: 251511,
    name: 'Hospital Pharmacist'
},
{
    id: 251513,
    name: 'Retail Pharmacist'
},
{
    id: 251911,
    name: 'Health Promotion Officer'
},
{
    id: 251912,
    name: 'Orthotist or Prosthetist'
},
{
    id: 252211,
    name: 'Acupuncturist'
},
{
    id: 252213,
    name: 'Naturopath'
},
{
    id: 252711,
    name: 'Audiologist'
},
{
    id: 252712,
    name: 'Speech Pathologist'
},
{
    id: 253111,
    name: 'General Practitioner'
},
{
    id: 253112,
    name: 'Resident Medical Officer'
},
{
    id: 253317,
    name: 'Intensive Care Specialist'
},
{
    id: 253318,
    name: 'Neurologist'
},
{
    id: 253321,
    name: 'Paediatrician'
},
{
    id: 253324,
    name: 'Thoracic Medicine Specialist'
},
{
    id: 253911,
    name: 'Dermatologist'
},
{
    id: 253912,
    name: 'Emergency Medicine Specialist'
},
{
    id: 253913,
    name: 'Obstetrician and Gynaecologist'
},
{
    id: 253914,
    name: 'Ophthalmologist'
},
{
    id: 253915,
    name: 'Pathologist'
},
{
    id: 253917,
    name: 'Diagnostic and Interventional Radiologist'
},
{
    id: 254211,
    name: 'Nurse Educator'
},
{
    id: 254212,
    name: 'Nurse Researcher'
},
{
    id: 254411,
    name: 'Nurse Practitioner'
},
{
    id: 254415,
    name: 'Registered Nurse (Critical Care and Emergency)'
},
{
    id: 254422,
    name: 'Registered Nurse (Mental Health)'
},
{
    id: 254424,
    name: 'Registered Nurse (Surgical)'
},
{
    id: 261211,
    name: 'Multimedia Specialist'
},
{
    id: 261212,
    name: 'Web Developer'
},
{
    id: 261311,
    name: 'Analyst Programmer'
},
{
    id: 261312,
    name: 'Developer Programmer'
},
{
    id: 261313,
    name: 'Software Engineer'
},
{
    id: 261314,
    name: 'Software Tester'
},
{
    id: 262111,
    name: 'Database Administrator'
},
{
    id: 262112,
    name: 'ICT Security Specialist'
},
{
    id: 262113,
    name: 'Systems Administrator'
},
{
    id: 263111,
    name: 'Computer Network and Systems Engineer'
},
{
    id: 263112,
    name: 'Network Administrator'
},
{
    id: 263113,
    name: 'Network Analyst'
},
{
    id: 263211,
    name: 'ICT Quality Assurance Engineer'
},
{
    id: 263212,
    name: 'ICT Support Engineer'
},
{
    id: 263213,
    name: 'ICT Systems Test Engineer'
},
{
    id: 272111,
    name: 'Careers Counsellor'
},
{
    id: 272112,
    name: 'Drug and Alcohol Counsellor'
},
{
    id: 272113,
    name: 'Family and Marriage Counsellor'
},
{
    id: 272114,
    name: 'Rehabilitation Counsellor'
},
{
    id: 272115,
    name: 'Student Counsellor'
},
{
    id: 272311,
    name: 'Clinical Psychologist'
},
{
    id: 272312,
    name: 'Educational Psychologist'
},
{
    id: 272313,
    name: 'Organisational Psychologist'
},
{
    id: 272411,
    name: 'Historian'
},
{
    id: 272412,
    name: 'Interpreter'
},
{
    id: 272413,
    name: 'Translator'
},
{
    id: 272612,
    name: 'Recreation Officer'
},
{
    id: 272613,
    name: 'Welfare Worker'
},
{
    id: 311211,
    name: 'Anaesthetic Technician'
},
{
    id: 311212,
    name: 'Cardiac Technician'
},
{
    id: 311213,
    name: 'Medical Laboratory Technician'
},
{
    id: 311214,
    name: 'Operating Theatre Technician'
},
{
    id: 311215,
    name: 'Pharmacy Technician'
},
{
    id: 311216,
    name: 'Pathology Collector'
},
{
    id: 311411,
    name: 'Chemistry Technician'
},
{
    id: 311412,
    name: 'Earth Science Technician'
},
{
    id: 311413,
    name: 'Life Science Technician'
},
{
    id: 312111,
    name: 'Architectural Draftsperson'
},
{
    id: 312112,
    name: 'Building Associate'
},
{
    id: 312113,
    name: 'Building Inspector'
},
{
    id: 312114,
    name: 'Construction Estimator'
},
{
    id: 312116,
    name: 'Surveying or Spatial Science Technician'
},
{
    id: 312211,
    name: 'Civil Engineering Draftsperson'
},
{
    id: 312212,
    name: 'Civil Engineering Technician'
},
{
    id: 312311,
    name: 'Electrical Engineering Draftsperson'
},
{
    id: 312312,
    name: 'Electrical Engineering Technician'
},
{
    id: 312511,
    name: 'Mechanical Engineering Draftsperson'
},
{
    id: 312512,
    name: 'Mechanical Engineering Technician'
},
{
    id: 313111,
    name: 'Hardware Technician'
},
{
    id: 313112,
    name: 'ICT Customer Support Officer'
},
{
    id: 313113,
    name: 'Web Administrator'
},
{
    id: 321211,
    name: 'Motor Mechanic  '
},
{
    id: 321212,
    name: 'Diesel Motor Mechanic'
},
{
    id: 321213,
    name: 'Motorcycle Mechanic'
},
{
    id: 321214,
    name: 'Small Engine Mechanic'
},
{
    id: 322311,
    name: 'Metal Fabricator'
},
{
    id: 322313,
    name: 'Welder'
},
{
    id: 323111,
    name: 'Aircraft Maintenance Engineer (Avionics)'
},
{
    id: 323112,
    name: 'Aircraft Maintenance Engineer (Mechanical)'
},
{
    id: 323211,
    name: 'Fitter  '
},
{
    id: 323214,
    name: 'Metal Machinist '
},
{
    id: 323313,
    name: 'Locksmith'
},
{
    id: 323314,
    name: 'Precision Instrument Maker and Repairer'
},
{
    id: 323316,
    name: 'Watch and Clock Maker and Repairer'
},
{
    id: 323411,
    name: 'Engineering Patternmaker'
},
{
    id: 323412,
    name: 'Toolmaker'
},
{
    id: 331111,
    name: 'Bricklayer'
},
{
    id: 331112,
    name: 'Stonemason'
},
{
    id: 331212,
    name: 'Carpenter'
},
{
    id: 331213,
    name: 'Joiner'
},
{
    id: 333211,
    name: 'Fibrous Plasterer'
},
{
    id: 333212,
    name: 'Solid Plasterer'
},
{
    id: 334111,
    name: 'Plumber  '
},
{
    id: 334113,
    name: 'Drainer'
},
{
    id: 334114,
    name: 'Gasfitter'
},
{
    id: 334115,
    name: 'Roof Plumber'
},
{
    id: 341113,
    name: 'Lift Mechanic'
},
{
    id: 342311,
    name: 'Business Machine Mechanic'
},
{
    id: 342312,
    name: 'Communications Operator'
},
{
    id: 342313,
    name: 'Electronic Equipment Trades Worker'
},
{
    id: 342314,
    name: 'Electronic Instrument Trades Worker  '
},
{
    id: 342413,
    name: 'Telecommunications Linesworker'
},
{
    id: 361113,
    name: 'Pet Groomer'
},
{
    id: 362212,
    name: 'Arborist'
},
{
    id: 392111,
    name: 'Print Finisher'
},
{
    id: 392112,
    name: 'Screen Printer'
},
{
    id: 393212,
    name: 'Clothing Patternmaker'
},
{
    id: 393213,
    name: 'Dressmaker or Tailor'
},
{
    id: 394211,
    name: 'Furniture Finisher'
},
{
    id: 394213,
    name: 'Wood Machinist'
},
{
    id: 399212,
    name: 'Gas or Petroleum Operator'
},
{
    id: 399213,
    name: 'Power Generation Plant Operator'
},
{
    id: 399311,
    name: 'Gallery or Museum Technician'
},
{
    id: 399312,
    name: 'Library Technician'
},
{
    id: 399511,
    name: 'Broadcast Transmitter Operator'
},
{
    id: 399512,
    name: 'Camera Operator '
},
{
    id: 399514,
    name: 'Make Up Artist'
},
{
    id: 399515,
    name: 'Musical Instrument Maker or Repairer'
},
{
    id: 399516,
    name: 'Sound Technician'
},
{
    id: 399911,
    name: 'Diver'
},
{
    id: 399913,
    name: 'Optical Dispenser'
},
{
    id: 411211,
    name: 'Dental Hygienist'
},
{
    id: 411213,
    name: 'Dental Technician'
},
{
    id: 411214,
    name: 'Dental Therapist'
},
{
    id: 411411,
    name: 'Enrolled Nurse'
},
{
    id: 411412,
    name: 'Mothercraft Nurse'
},
{
    id: 411711,
    name: 'Community Worker'
},
{
    id: 411712,
    name: 'Disabilities Services Officer'
},
{
    id: 411713,
    name: 'Family Support Worker'
},
{
    id: 411714,
    name: 'Parole or Probation Officer'
},
{
    id: 411715,
    name: 'Residential Care Officer'
},
{
    id: 411716,
    name: 'Youth Worker'
},
{
    id: 421111,
    name: 'Child Care Worker'
},
{
    id: 421113,
    name: 'Nanny'
},
{
    id: 422112,
    name: 'Integration Aide'
},
{
    id: 423311,
    name: 'Hospital Orderly'
},
{
    id: 423312,
    name: 'Nursing Support Worker'
},
{
    id: 423313,
    name: 'Personal Care Assistant'
},
{
    id: 423314,
    name: 'Therapy Aide'
},
{
    id: 431111,
    name: 'Bar Attendant'
},
{
    id: 431112,
    name: 'Barista'
},
{
    id: 431912,
    name: 'Doorperson or Luggage Porter'
},
{
    id: 441211,
    name: 'Emergency Service Worker'
},
{
    id: 441212,
    name: 'Fire Fighter'
},
{
    id: 441311,
    name: 'Detective'
},
{
    id: 441312,
    name: 'Police Officer'
},
{
    id: 442214,
    name: 'Private Investigator'
},
{
    id: 442215,
    name: 'Retail Loss Prevention Officer'
},
{
    id: 442216,
    name: 'Security Consultant'
},
{
    id: 442217,
    name: 'Security Officer'
},
{
    id: 451612,
    name: 'Travel Consultant'
},
{
    id: 452322,
    name: 'Sports Umpire'
},
{
    id: 452414,
    name: 'Lifeguard'
},
{
    id: 511111,
    name: 'Contract Administrator'
},
{
    id: 511112,
    name: 'Program or Project Administrator'
},
{
    id: 512211,
    name: 'Health Practice Manager'
},
{
    id: 521211,
    name: 'Secretary  '
},
{
    id: 521212,
    name: 'Legal Secretary'
},
{
    id: 532111,
    name: 'Data Entry Operator'
},
{
    id: 532113,
    name: 'Word Processing Operator'
},
{
    id: 541111,
    name: 'Call or Contact Centre Team Leader'
},
{
    id: 541112,
    name: 'Call or Contact Centre Operator'
},
{
    id: 542111,
    name: 'Receptionist  '
},
{
    id: 542112,
    name: 'Admissions Clerk'
},
{
    id: 542113,
    name: 'Hotel or Motel Receptionist'
},
{
    id: 542114,
    name: 'Medical Receptionist'
},
{
    id: 551111,
    name: 'Accounts Clerk'
},
{
    id: 551112,
    name: 'Cost Clerk'
},
{
    id: 552312,
    name: 'Insurance Consultant'
},
{
    id: 552314,
    name: 'Statistical Clerk'
},
{
    id: 561211,
    name: 'Courier'
},
{
    id: 561212,
    name: 'Postal Delivery Officer'
},
{
    id: 561411,
    name: 'Mail Clerk'
},
{
    id: 561912,
    name: 'Meter Reader'
},
{
    id: 561913,
    name: 'Parking Inspector'
},
{
    id: 591112,
    name: 'Production Clerk'
},
{
    id: 591113,
    name: 'Purchasing Officer'
},
{
    id: 591115,
    name: 'Stock Clerk'
},
{
    id: 591116,
    name: 'Warehouse Administrator'
},
{
    id: 591117,
    name: 'Order Clerk'
},
{
    id: 599511,
    name: 'Customs Officer'
},
{
    id: 599512,
    name: 'Immigration Officer'
},
{
    id: 599516,
    name: 'Taxation Inspector'
},
{
    id: 599518,
    name: 'Transport Operations Inspector'
},
{
    id: 599913,
    name: 'Proof Reader'
},
{
    id: 599914,
    name: 'Radio Despatcher'
},
{
    id: 599915,
    name: 'Clinical Coder'
},
{
    id: 599916,
    name: 'Facilities Administrator'
},
{
    id: 612112,
    name: 'Property Manager'
},
{
    id: 612114,
    name: 'Real Estate Agent'
},
{
    id: 612115,
    name: 'Real Estate Representative'
},
{
    id: 621311,
    name: 'Motor Vehicle or Caravan Salesperson'
},
{
    id: 621312,
    name: 'Motor Vehicle Parts Interpreter'
},
{
    id: 621911,
    name: 'Materials Recycler'
},
{
    id: 639111,
    name: 'Model'
},
{
    id: 639112,
    name: 'Sales Demonstrator'
},
{
    id: 639211,
    name: 'Retail Buyer'
},
{
    id: 711114,
    name: 'Stone Processing Machine Operator'
},
{
    id: 711912,
    name: 'Motion Picture Projectionist'
},
{
    id: 711914,
    name: 'Sterilisation Technician'
},
{
    id: 712211,
    name: 'Driller'
},
{
    id: 712212,
    name: 'Miner'
},
{
    id: 712213,
    name: 'Shot Firer'
},
{
    id: 712911,
    name: 'Boiler or Engine Operator'
},
{
    id: 712912,
    name: 'Bulk Materials Handling Plant Operator'
},
{
    id: 712915,
    name: 'Concrete Pump Operator'
},
{
    id: 712917,
    name: 'Railway Signal Operator'
},
{
    id: 712921,
    name: 'Waste Water or Water Plant Operator'
},
{
    id: 712922,
    name: 'Weighbridge Operator'
},
{
    id: 721111,
    name: 'Agricultural and Horticultural Mobile Plant Operator'
},
{
    id: 721211,
    name: 'Earthmoving Plant Operator  '
},
{
    id: 721212,
    name: 'Backhoe Operator'
},
{
    id: 721213,
    name: 'Bulldozer Operator'
},
{
    id: 721214,
    name: 'Excavator Operator'
},
{
    id: 721215,
    name: 'Grader Operator'
},
{
    id: 721216,
    name: 'Loader Operator'
},
{
    id: 721913,
    name: 'Paving Plant Operator'
},
{
    id: 721915,
    name: 'Road Roller Operator'
},
{
    id: 731311,
    name: 'Train Driver'
},
{
    id: 821111,
    name: 'Builder\'s Labourer'
},
{
    id: 821411,
    name: 'Building Insulation Installer'
},
{
    id: 821412,
    name: 'Home Improvement Installer'
},
{
    id: 821711,
    name: 'Construction Rigger'
},
{
    id: 821712,
    name: 'Scaffolder'
},
{
    id: 821713,
    name: 'Steel Fixer'
},
{
    id: 821714,
    name: 'Structural Steel Erector'
},
{
    id: 821911,
    name: 'Crane Chaser'
},
{
    id: 821912,
    name: 'Driller\'s Assistant'
},
{
    id: 821913,
    name: 'Lagger'
},
{
    id: 821914,
    name: 'Mining Support Worker'
},
{
    id: 831211,
    name: 'Meat Boner and Slicer'
},
{
    id: 831212,
    name: 'Slaughterer'
},
{
    id: 839311,
    name: 'Product Examiner'
},
{
    id: 839312,
    name: 'Product Grader'
},
{
    id: 839313,
    name: 'Product Tester'
},
{
    id: 839912,
    name: 'Chemical Plant Worker'
},
{
    id: 839918,
    name: 'Recycling Worker'
},
{
    id: 841311,
    name: 'Forestry Worker'
},
{
    id: 841312,
    name: 'Logging Assistant'
},
{
    id: 841313,
    name: 'Tree Faller'
},
{
    id: 841911,
    name: 'Hunter-Trapper'
},
{
    id: 841913,
    name: 'Pest Controller'
},
{
    id: 899211,
    name: 'Deck Hand'
},
{
    id: 899212,
    name: 'Fishing Hand'
},
{
    id: 899412,
    name: 'Autoglazier'
},
{
    id: 899415,
    name: 'Tyre Fitter'
},
{
    id: 899911,
    name: 'Bicycle Mechanic'
},
{
    id: 899912,
    name: 'Car Park Attendant'
},
{
    id: 899913,
    name: 'Crossing Supervisor'
},
{
    id: 899914,
    name: 'Electrical or Telecommunications Trades Assistant'
},
{
    id: 899915,
    name: 'Leaflet or Newspaper Deliverer'
},
{
    id: 899918,
    name: 'Sign Erector'
},
{
    id: 899921,
    name: 'Ticket Collector or Usher'
},
{
    id: 899923,
    name: 'Road Traffic Controller'
},
{
    id: 254412,
    name: 'Registered Nurse (Aged Care)'
},
{
    id: 254413,
    name: 'Registered Nurse (Child and Family Health)'
},
{
    id: 254414,
    name: 'Registered Nurse (Community Health)'
},
{
    id: 254416,
    name: 'Registered Nurse (Developmental Disability)'
},
{
    id: 254417,
    name: 'Registered Nurse (Disability and Rehabilitation)'
},
{
    id: 254418,
    name: 'Registered Nurse (Medical)'
},
{
    id: 254421,
    name: 'Registered Nurse (Medical Practice)'
},
{
    id: 254423,
    name: 'Registered Nurse (Perioperative)'
},
{
    id: 254425,
    name: 'Registered Nurse (Paediatrics)'
},
];
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    select:{
      textAlign:'center',
      marginTop:'40px'
    }
  }));
function CustomAuto() {
    const classes = useStyles();
    const [bucket1, setBucket1] = React.useState();
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    //console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    //console.log(result)
  }

  const handleOnSelect = (item) => {
    console.log(item)
    let setSelectedArray = [];
  let matchedArray = [];
  let displayJobs = [];
    let bucket2Array;
  let bucket2ArrayRest;
  let allMatchedArray;
  let notMatchedArray;
  let jobCode = item.id
  const propertyById = async (req, res) => {
    try {
        
        async function getPhotoData(jobCode){
            const response = await fetch(`http://localhost:3004/skills`);
            const data = await response.json();
            for (const [mainIndex, element] of Object.entries(data)) {
               matchedArray =  element.filter((el,index) => {
                    if(mainIndex == jobCode ) {

                        setSelectedArray = [...setSelectedArray, {'score':el.Score,'comp':el.Core_Competencies}];

                    }
                   console.log(setSelectedArray[index] && setSelectedArray[index].comp)
                   //return (el.Score === setSelectedArray[index].score &&
                   // el.Core_Competencies === setSelectedArray[index].comp)
                    
                    //console.log(setSelectedArray[index])



                    //return el.Core_Competencies === 

                })
                // const [index, element] = [0, 'a'] on 1st iteration, then [1, 'b'], etc. 
                
            }
            console.log(matchedArray)

            //console.log(setSelectedArray[0])

            //console.log(data)
        }
        await Promise.all(getPhotoData(jobCode));
        //console.log(bucket1);
        //return res.success(res, propertyData);
    } catch (err) {
        console.log(err)
        //return res.error(res, err.response.status || 500, err.response.statusText || err);
    }
}

    const findJobMatches = (jobCode) => {
         const matchJob = fetch(`http://localhost:3004/skills`)
                  .then(res => res.json())
                  .then(data => {
                      data[jobCode].map((selectedItem) => {
                          setSelectedArray.push(selectedItem);
                      })
                      Object.values(data).map((item) => {
                          matchedArray = item.filter((matchedJob,index) => {
                              return  ((setSelectedArray[index].Core_Competencies === matchedJob.Core_Competencies ) &&
                                      (setSelectedArray[index].Score === matchedJob.Score )&&
                                      ((setSelectedArray[index].ANZSCO_Title !== matchedJob.ANZSCO_Title ))) 
                                      })
  
                          if(matchedArray.length === 10) {
                              displayJobs.push(matchedArray)
                          }
                      })
                      
                  })
                 // console.log(di)
                  setBucket1(displayJobs)
              }
             // findJobMatches(jobCode)
             propertyById()
  
    
    }


  const handleOnFocus = () => {
    //console.log('Focused')
  }

  const formatResult = (item) => {
    return item;
   // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  }
  return (
    <>
    <div className={classes.root}>
    <Grid container spacing={3}>
        <Grid item xs>
        </Grid>
        <Grid className={classes.select} item xs={10} md={6}>
        <div>
         <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>
            </div>  
            {<ShowData bucket1={bucket1}/> }
            </>
  );
}

export default CustomAuto