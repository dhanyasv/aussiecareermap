/* eslint-disable no-use-before-define */
import React , {createContex,useEffect,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ShowData } from './Getdata';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const dummyData = {
    "jobs" :[
    {
       "ANZSCO_Code":"1111",
       "ANZSCO_Title":"Chief Executives and Managing Directors"
    },
    {
       "ANZSCO_Code":"1112",
       "ANZSCO_Title":"General Managers"
    },
    {
       "ANZSCO_Code":"1213",
       "ANZSCO_Title":"Livestock Farmers"
    },
    {
       "ANZSCO_Code":"1214",
       "ANZSCO_Title":"Mixed Crop and Livestock Farmers"
    },
    {
       "ANZSCO_Code":"1321",
       "ANZSCO_Title":"Corporate Services Managers"
    },
    {
       "ANZSCO_Code":"1322",
       "ANZSCO_Title":"Finance Managers"
    },
    {
       "ANZSCO_Code":"1323",
       "ANZSCO_Title":"Human Resource Managers"
    },
    {
       "ANZSCO_Code":"1324",
       "ANZSCO_Title":"Policy and Planning Managers"
    },
    {
       "ANZSCO_Code":"1325",
       "ANZSCO_Title":"Research and Development Managers"
    },
    {
       "ANZSCO_Code":"1331",
       "ANZSCO_Title":"Construction Managers"
    },
    {
       "ANZSCO_Code":"1332",
       "ANZSCO_Title":"Engineering Managers"
    },
    {
       "ANZSCO_Code":"1333",
       "ANZSCO_Title":"\"Importers"
    },
    {
       "ANZSCO_Code":"1336",
       "ANZSCO_Title":"\"Supply"
    },
    {
       "ANZSCO_Code":"1341",
       "ANZSCO_Title":"Child Care Centre Managers"
    },
    {
       "ANZSCO_Code":"1342",
       "ANZSCO_Title":"Health and Welfare Services Managers"
    },
    {
       "ANZSCO_Code":"1343",
       "ANZSCO_Title":"School Principals"
    },
    {
       "ANZSCO_Code":"1344",
       "ANZSCO_Title":"Education Managers"
    },
    {
       "ANZSCO_Code":"1351",
       "ANZSCO_Title":"ICT Managers"
    },
    {
       "ANZSCO_Code":"1411",
       "ANZSCO_Title":"Cafe and Restaurant Managers"
    },
    {
       "ANZSCO_Code":"1413",
       "ANZSCO_Title":"Hotel and Motel Managers"
    },
    {
       "ANZSCO_Code":"1414",
       "ANZSCO_Title":"Licensed Club Managers"
    },
    {
       "ANZSCO_Code":"1421",
       "ANZSCO_Title":"Retail Managers"
    },
    {
       "ANZSCO_Code":"1491",
       "ANZSCO_Title":"\"Amusement"
    },
    {
       "ANZSCO_Code":"1493",
       "ANZSCO_Title":"Conference and Event Organisers"
    },
    {
       "ANZSCO_Code":"2113",
       "ANZSCO_Title":"Photographers"
    },
    {
       "ANZSCO_Code":"2114",
       "ANZSCO_Title":"Visual Arts and Crafts Professionals"
    },
    {
       "ANZSCO_Code":"2123",
       "ANZSCO_Title":"\"Film"
    },
    {
       "ANZSCO_Code":"2124",
       "ANZSCO_Title":"Journalists and Writers"
    },
    {
       "ANZSCO_Code":"2221",
       "ANZSCO_Title":"Financial Brokers"
    },
    {
       "ANZSCO_Code":"2222",
       "ANZSCO_Title":"Financial Dealers"
    },
    {
       "ANZSCO_Code":"2232",
       "ANZSCO_Title":"ICT Trainers"
    },
    {
       "ANZSCO_Code":"2233",
       "ANZSCO_Title":"Training and Development Professionals"
    },
    {
       "ANZSCO_Code":"2243",
       "ANZSCO_Title":"Economists"
    },
    {
       "ANZSCO_Code":"2245",
       "ANZSCO_Title":"Land Economists and Valuers"
    },
    {
       "ANZSCO_Code":"2246",
       "ANZSCO_Title":"Librarians"
    },
    {
       "ANZSCO_Code":"2251",
       "ANZSCO_Title":"Advertising and Marketing Professionals"
    },
    {
       "ANZSCO_Code":"2252",
       "ANZSCO_Title":"ICT Sales Professionals"
    },
    {
       "ANZSCO_Code":"2253",
       "ANZSCO_Title":"Public Relations Professionals"
    },
    {
       "ANZSCO_Code":"2254",
       "ANZSCO_Title":"Technical Sales Representatives"
    },
    {
       "ANZSCO_Code":"2311",
       "ANZSCO_Title":"Air Transport Professionals"
    },
    {
       "ANZSCO_Code":"2322",
       "ANZSCO_Title":"Surveyors and Spatial Scientists"
    },
    {
       "ANZSCO_Code":"2325",
       "ANZSCO_Title":"Interior Designers"
    },
    {
       "ANZSCO_Code":"2326",
       "ANZSCO_Title":"Urban and Regional Planners"
    },
    {
       "ANZSCO_Code":"2333",
       "ANZSCO_Title":"Electrical Engineers"
    },
    {
       "ANZSCO_Code":"2334",
       "ANZSCO_Title":"Electronics Engineers"
    },
    {
       "ANZSCO_Code":"2341",
       "ANZSCO_Title":"Agricultural and Forestry Scientists"
    },
    {
       "ANZSCO_Code":"2344",
       "ANZSCO_Title":"\"Geologists"
    },
    {
       "ANZSCO_Code":"2346",
       "ANZSCO_Title":"Medical Laboratory Scientists"
    },
    {
       "ANZSCO_Code":"2347",
       "ANZSCO_Title":"Veterinarians"
    },
    {
       "ANZSCO_Code":"2411",
       "ANZSCO_Title":"Early Childhood Teachers"
    },
    {
       "ANZSCO_Code":"2412",
       "ANZSCO_Title":"Primary School Teachers"
    },
    {
       "ANZSCO_Code":"2413",
       "ANZSCO_Title":"Middle School Teachers"
    },
    {
       "ANZSCO_Code":"2414",
       "ANZSCO_Title":"Secondary School Teachers"
    },
    {
       "ANZSCO_Code":"2415",
       "ANZSCO_Title":"Special Education Teachers"
    },
    {
       "ANZSCO_Code":"2422",
       "ANZSCO_Title":"Vocational Education Teachers"
    },
    {
       "ANZSCO_Code":"2491",
       "ANZSCO_Title":"Education Advisers and Reviewers"
    },
    {
       "ANZSCO_Code":"2492",
       "ANZSCO_Title":"\"Private Art"
    },
    {
       "ANZSCO_Code":"2511",
       "ANZSCO_Title":"Nutrition Professionals"
    },
    {
       "ANZSCO_Code":"2521",
       "ANZSCO_Title":"Chiropractors and Osteopaths"
    },
    {
       "ANZSCO_Code":"2522",
       "ANZSCO_Title":"Complementary Health Therapists"
    },
    {
       "ANZSCO_Code":"2523",
       "ANZSCO_Title":"Dental Practitioners"
    },
    {
       "ANZSCO_Code":"2524",
       "ANZSCO_Title":"Occupational Therapists"
    },
    {
       "ANZSCO_Code":"2525",
       "ANZSCO_Title":"Physiotherapists"
    },
    {
       "ANZSCO_Code":"2526",
       "ANZSCO_Title":"Podiatrists"
    },
    {
       "ANZSCO_Code":"2532",
       "ANZSCO_Title":"Anaesthetists"
    },
    {
       "ANZSCO_Code":"2533",
       "ANZSCO_Title":"Specialist Physicians"
    },
    {
       "ANZSCO_Code":"2534",
       "ANZSCO_Title":"Psychiatrists"
    },
    {
       "ANZSCO_Code":"2535",
       "ANZSCO_Title":"Surgeons"
    },
    {
       "ANZSCO_Code":"2541",
       "ANZSCO_Title":"Midwives"
    },
    {
       "ANZSCO_Code":"2543",
       "ANZSCO_Title":"Nurse Managers"
    },
    {
       "ANZSCO_Code":"2544",
       "ANZSCO_Title":"Registered Nurses"
    },
    {
       "ANZSCO_Code":"2611",
       "ANZSCO_Title":"ICT Business and Systems Analysts"
    },
    {
       "ANZSCO_Code":"2633",
       "ANZSCO_Title":"Telecommunications Engineering Professionals"
    },
    {
       "ANZSCO_Code":"2711",
       "ANZSCO_Title":"Barristers"
    },
    {
       "ANZSCO_Code":"2712",
       "ANZSCO_Title":"Judicial and Legal Professionals"
    },
    {
       "ANZSCO_Code":"2713",
       "ANZSCO_Title":"Solicitors"
    },
    {
       "ANZSCO_Code":"2721",
       "ANZSCO_Title":"Counsellors"
    },
    {
       "ANZSCO_Code":"2722",
       "ANZSCO_Title":"Ministers of Religion"
    },
    {
       "ANZSCO_Code":"2724",
       "ANZSCO_Title":"Social Professionals"
    },
    {
       "ANZSCO_Code":"2725",
       "ANZSCO_Title":"Social Workers"
    },
    {
       "ANZSCO_Code":"3111",
       "ANZSCO_Title":"Agricultural Technicians"
    },
    {
       "ANZSCO_Code":"3113",
       "ANZSCO_Title":"Primary Products Inspectors"
    },
    {
       "ANZSCO_Code":"3124",
       "ANZSCO_Title":"Electronic Engineering Draftspersons and Technicians"
    },
    {
       "ANZSCO_Code":"3132",
       "ANZSCO_Title":"Telecommunications Technical Specialists"
    },
    {
       "ANZSCO_Code":"3211",
       "ANZSCO_Title":"Automotive Electricians"
    },
    {
       "ANZSCO_Code":"3221",
       "ANZSCO_Title":"\"Metal Casting"
    },
    {
       "ANZSCO_Code":"3222",
       "ANZSCO_Title":"Sheetmetal Trades Workers"
    },
    {
       "ANZSCO_Code":"3241",
       "ANZSCO_Title":"Panelbeaters"
    },
    {
       "ANZSCO_Code":"3242",
       "ANZSCO_Title":"Vehicle Body Builders and Trimmers"
    },
    {
       "ANZSCO_Code":"3243",
       "ANZSCO_Title":"Vehicle Painters"
    },
    {
       "ANZSCO_Code":"3321",
       "ANZSCO_Title":"Floor Finishers"
    },
    {
       "ANZSCO_Code":"3322",
       "ANZSCO_Title":"Painting Trades Workers"
    },
    {
       "ANZSCO_Code":"3331",
       "ANZSCO_Title":"Glaziers"
    },
    {
       "ANZSCO_Code":"3333",
       "ANZSCO_Title":"Roof Tilers"
    },
    {
       "ANZSCO_Code":"3334",
       "ANZSCO_Title":"Wall and Floor Tilers"
    },
    {
       "ANZSCO_Code":"3411",
       "ANZSCO_Title":"Electricians"
    },
    {
       "ANZSCO_Code":"3421",
       "ANZSCO_Title":"Airconditioning and Refrigeration Mechanics"
    },
    {
       "ANZSCO_Code":"3422",
       "ANZSCO_Title":"Electrical Distribution Trades Workers"
    },
    {
       "ANZSCO_Code":"3424",
       "ANZSCO_Title":"Telecommunications Trades Workers"
    },
    {
       "ANZSCO_Code":"3511",
       "ANZSCO_Title":"Bakers and Pastrycooks"
    },
    {
       "ANZSCO_Code":"3512",
       "ANZSCO_Title":"Butchers and Smallgoods Makers"
    },
    {
       "ANZSCO_Code":"3513",
       "ANZSCO_Title":"Chefs"
    },
    {
       "ANZSCO_Code":"3514",
       "ANZSCO_Title":"Cooks"
    },
    {
       "ANZSCO_Code":"3611",
       "ANZSCO_Title":"Animal Attendants and Trainers"
    },
    {
       "ANZSCO_Code":"3613",
       "ANZSCO_Title":"Veterinary Nurses"
    },
    {
       "ANZSCO_Code":"3621",
       "ANZSCO_Title":"Florists"
    },
    {
       "ANZSCO_Code":"3622",
       "ANZSCO_Title":"Gardeners"
    },
    {
       "ANZSCO_Code":"3623",
       "ANZSCO_Title":"Greenkeepers"
    },
    {
       "ANZSCO_Code":"3624",
       "ANZSCO_Title":"Nurserypersons"
    },
    {
       "ANZSCO_Code":"3911",
       "ANZSCO_Title":"Hairdressers"
    },
    {
       "ANZSCO_Code":"3922",
       "ANZSCO_Title":"Graphic Pre-press Trades Workers"
    },
    {
       "ANZSCO_Code":"3923",
       "ANZSCO_Title":"Printers"
    },
    {
       "ANZSCO_Code":"3933",
       "ANZSCO_Title":"Upholsterers"
    },
    {
       "ANZSCO_Code":"3941",
       "ANZSCO_Title":"Cabinetmakers"
    },
    {
       "ANZSCO_Code":"3991",
       "ANZSCO_Title":"Boat Builders and Shipwrights"
    },
    {
       "ANZSCO_Code":"3994",
       "ANZSCO_Title":"Jewellers"
    },
    {
       "ANZSCO_Code":"3996",
       "ANZSCO_Title":"Signwriters"
    },
    {
       "ANZSCO_Code":"4111",
       "ANZSCO_Title":"Ambulance Officers and Paramedics"
    },
    {
       "ANZSCO_Code":"4113",
       "ANZSCO_Title":"Diversional Therapists"
    },
    {
       "ANZSCO_Code":"4115",
       "ANZSCO_Title":"Indigenous Health Workers"
    },
    {
       "ANZSCO_Code":"4116",
       "ANZSCO_Title":"Massage Therapists"
    },
    {
       "ANZSCO_Code":"4221",
       "ANZSCO_Title":"Education Aides"
    },
    {
       "ANZSCO_Code":"4231",
       "ANZSCO_Title":"Aged and Disabled Carers"
    },
    {
       "ANZSCO_Code":"4232",
       "ANZSCO_Title":"Dental Assistants"
    },
    {
       "ANZSCO_Code":"4234",
       "ANZSCO_Title":"Special Care Workers"
    },
    {
       "ANZSCO_Code":"4312",
       "ANZSCO_Title":"Cafe Workers"
    },
    {
       "ANZSCO_Code":"4313",
       "ANZSCO_Title":"Gaming Workers"
    },
    {
       "ANZSCO_Code":"4314",
       "ANZSCO_Title":"Hotel Service Managers"
    },
    {
       "ANZSCO_Code":"4315",
       "ANZSCO_Title":"Waiters"
    },
    {
       "ANZSCO_Code":"4421",
       "ANZSCO_Title":"Prison Officers"
    },
    {
       "ANZSCO_Code":"4511",
       "ANZSCO_Title":"Beauty Therapists"
    },
    {
       "ANZSCO_Code":"4512",
       "ANZSCO_Title":"Driving Instructors"
    },
    {
       "ANZSCO_Code":"4513",
       "ANZSCO_Title":"Funeral Workers"
    },
    {
       "ANZSCO_Code":"4514",
       "ANZSCO_Title":"\"Gallery"
    },
    {
       "ANZSCO_Code":"4517",
       "ANZSCO_Title":"Travel Attendants"
    },
    {
       "ANZSCO_Code":"4521",
       "ANZSCO_Title":"Fitness Instructors"
    },
    {
       "ANZSCO_Code":"4522",
       "ANZSCO_Title":"Outdoor Adventure Guides"
    },
    {
       "ANZSCO_Code":"4523",
       "ANZSCO_Title":"\"Sports Coaches"
    },
    {
       "ANZSCO_Code":"4524",
       "ANZSCO_Title":"Sportspersons"
    },
    {
       "ANZSCO_Code":"5121",
       "ANZSCO_Title":"Office Managers"
    },
    {
       "ANZSCO_Code":"5211",
       "ANZSCO_Title":"Personal Assistants"
    },
    {
       "ANZSCO_Code":"5311",
       "ANZSCO_Title":"General Clerks"
    },
    {
       "ANZSCO_Code":"5412",
       "ANZSCO_Title":"Information Officers"
    },
    {
       "ANZSCO_Code":"5512",
       "ANZSCO_Title":"Bookkeepers"
    },
    {
       "ANZSCO_Code":"5513",
       "ANZSCO_Title":"Payroll Clerks"
    },
    {
       "ANZSCO_Code":"5521",
       "ANZSCO_Title":"Bank Workers"
    },
    {
       "ANZSCO_Code":"5522",
       "ANZSCO_Title":"Credit and Loans Officers"
    },
    {
       "ANZSCO_Code":"5611",
       "ANZSCO_Title":"Betting Clerks"
    },
    {
       "ANZSCO_Code":"5613",
       "ANZSCO_Title":"Filing and Registry Clerks"
    },
    {
       "ANZSCO_Code":"5614",
       "ANZSCO_Title":"Mail Sorters"
    },
    {
       "ANZSCO_Code":"5615",
       "ANZSCO_Title":"Survey Interviewers"
    },
    {
       "ANZSCO_Code":"5616",
       "ANZSCO_Title":"Switchboard Operators"
    },
    {
       "ANZSCO_Code":"5912",
       "ANZSCO_Title":"Transport and Despatch Clerks"
    },
    {
       "ANZSCO_Code":"5991",
       "ANZSCO_Title":"Conveyancers and Legal Executives"
    },
    {
       "ANZSCO_Code":"5992",
       "ANZSCO_Title":"Court and Legal Clerks"
    },
    {
       "ANZSCO_Code":"5993",
       "ANZSCO_Title":"Debt Collectors"
    },
    {
       "ANZSCO_Code":"5994",
       "ANZSCO_Title":"Human Resource Clerks"
    },
    {
       "ANZSCO_Code":"5995",
       "ANZSCO_Title":"Inspectors and Regulatory Officers"
    },
    {
       "ANZSCO_Code":"5996",
       "ANZSCO_Title":"\"Insurance Investigators"
    },
    {
       "ANZSCO_Code":"5997",
       "ANZSCO_Title":"Library Assistants"
    },
    {
       "ANZSCO_Code":"6111",
       "ANZSCO_Title":"\"Auctioneers"
    },
    {
       "ANZSCO_Code":"6112",
       "ANZSCO_Title":"Insurance Agents"
    },
    {
       "ANZSCO_Code":"6113",
       "ANZSCO_Title":"Sales Representatives"
    },
    {
       "ANZSCO_Code":"6211",
       "ANZSCO_Title":"Sales Assistants "
    },
    {
       "ANZSCO_Code":"6214",
       "ANZSCO_Title":"Pharmacy Sales Assistants"
    },
    {
       "ANZSCO_Code":"6215",
       "ANZSCO_Title":"Retail Supervisors"
    },
    {
       "ANZSCO_Code":"6217",
       "ANZSCO_Title":"Street Vendors and Related Salespersons"
    },
    {
       "ANZSCO_Code":"6311",
       "ANZSCO_Title":"Checkout Operators and Office Cashiers"
    },
    {
       "ANZSCO_Code":"6393",
       "ANZSCO_Title":"Telemarketers"
    },
    {
       "ANZSCO_Code":"6394",
       "ANZSCO_Title":"Ticket Salespersons"
    },
    {
       "ANZSCO_Code":"6395",
       "ANZSCO_Title":"Visual Merchandisers"
    },
    {
       "ANZSCO_Code":"7111",
       "ANZSCO_Title":"\"Clay"
    },
    {
       "ANZSCO_Code":"7112",
       "ANZSCO_Title":"Industrial Spraypainters"
    },
    {
       "ANZSCO_Code":"7113",
       "ANZSCO_Title":"Paper and Wood Processing Machine Operators"
    },
    {
       "ANZSCO_Code":"7114",
       "ANZSCO_Title":"Photographic Developers and Printers"
    },
    {
       "ANZSCO_Code":"7115",
       "ANZSCO_Title":"Plastics and Rubber Production Machine Operators"
    },
    {
       "ANZSCO_Code":"7116",
       "ANZSCO_Title":"Sewing Machinists"
    },
    {
       "ANZSCO_Code":"7117",
       "ANZSCO_Title":"Textile and Footwear Production Machine Operators"
    },
    {
       "ANZSCO_Code":"7121",
       "ANZSCO_Title":"\"Crane"
    },
    {
       "ANZSCO_Code":"7123",
       "ANZSCO_Title":"Engineering Production Workers"
    },
    {
       "ANZSCO_Code":"7213",
       "ANZSCO_Title":"Forklift Drivers"
    },
    {
       "ANZSCO_Code":"7311",
       "ANZSCO_Title":"Automobile Drivers"
    },
    {
       "ANZSCO_Code":"7312",
       "ANZSCO_Title":"Bus and Coach Drivers"
    },
    {
       "ANZSCO_Code":"7321",
       "ANZSCO_Title":"Delivery Drivers"
    },
    {
       "ANZSCO_Code":"7331",
       "ANZSCO_Title":"Truck Drivers"
    },
    {
       "ANZSCO_Code":"7411",
       "ANZSCO_Title":"Storepersons"
    },
    {
       "ANZSCO_Code":"8111",
       "ANZSCO_Title":"Car Detailers"
    },
    {
       "ANZSCO_Code":"8112",
       "ANZSCO_Title":"Commercial Cleaners"
    },
    {
       "ANZSCO_Code":"8113",
       "ANZSCO_Title":"Domestic Cleaners"
    },
    {
       "ANZSCO_Code":"8114",
       "ANZSCO_Title":"Housekeepers"
    },
    {
       "ANZSCO_Code":"8115",
       "ANZSCO_Title":"Laundry Workers"
    },
    {
       "ANZSCO_Code":"8212",
       "ANZSCO_Title":"Concreters"
    },
    {
       "ANZSCO_Code":"8213",
       "ANZSCO_Title":"Fencers"
    },
    {
       "ANZSCO_Code":"8215",
       "ANZSCO_Title":"Paving and Surfacing Labourers"
    },
    {
       "ANZSCO_Code":"8216",
       "ANZSCO_Title":"Railway Track Workers"
    },
    {
       "ANZSCO_Code":"8311",
       "ANZSCO_Title":"Food and Drink Factory Workers"
    },
    {
       "ANZSCO_Code":"8313",
       "ANZSCO_Title":"\"Meat"
    },
    {
       "ANZSCO_Code":"8321",
       "ANZSCO_Title":"Packers"
    },
    {
       "ANZSCO_Code":"8322",
       "ANZSCO_Title":"Product Assemblers"
    },
    {
       "ANZSCO_Code":"8399",
       "ANZSCO_Title":"Factory Process Workers"
    },
    {
       "ANZSCO_Code":"8412",
       "ANZSCO_Title":"Crop Farm Workers"
    },
    {
       "ANZSCO_Code":"8414",
       "ANZSCO_Title":"Garden and Nursery Labourers"
    },
    {
       "ANZSCO_Code":"8415",
       "ANZSCO_Title":"Livestock Farm Workers"
    },
    {
       "ANZSCO_Code":"8416",
       "ANZSCO_Title":"Mixed Crop and Livestock Farm Workers"
    },
    {
       "ANZSCO_Code":"8511",
       "ANZSCO_Title":"Fast Food Cooks"
    },
    {
       "ANZSCO_Code":"8512",
       "ANZSCO_Title":"Food Trades Assistants"
    },
    {
       "ANZSCO_Code":"8513",
       "ANZSCO_Title":"Kitchenhands"
    },
    {
       "ANZSCO_Code":"8911",
       "ANZSCO_Title":"Freight and Furniture Handlers"
    },
    {
       "ANZSCO_Code":"8912",
       "ANZSCO_Title":"Shelf Fillers"
    },
    {
       "ANZSCO_Code":"8991",
       "ANZSCO_Title":"Caretakers"
    },
    {
       "ANZSCO_Code":"8993",
       "ANZSCO_Title":"Handypersons"
    },
    {
       "ANZSCO_Code":"8994",
       "ANZSCO_Title":"Motor Vehicle Parts and Accessories Fitters"
    },
    {
       "ANZSCO_Code":"8996",
       "ANZSCO_Title":"Recycling and Rubbish Collectors"
    },
    {
       "ANZSCO_Code":"8997",
       "ANZSCO_Title":"Vending Machine Attendants"
    },
    {
       "ANZSCO_Code":"131112",
       "ANZSCO_Title":"Sales and Marketing Manager"
    },
    {
       "ANZSCO_Code":"131113",
       "ANZSCO_Title":"Advertising Manager"
    },
    {
       "ANZSCO_Code":"131114",
       "ANZSCO_Title":"Public Relations Manager"
    },
    {
       "ANZSCO_Code":"133512",
       "ANZSCO_Title":"Production Manager in Manufacturing"
    },
    {
       "ANZSCO_Code":"133513",
       "ANZSCO_Title":"Production Manager in Mining"
    },
    {
       "ANZSCO_Code":"134411",
       "ANZSCO_Title":"Faculty Head"
    },
    {
       "ANZSCO_Code":"135111",
       "ANZSCO_Title":"Chief Information Officer"
    },
    {
       "ANZSCO_Code":"139912",
       "ANZSCO_Title":"Environmental Manager"
    },
    {
       "ANZSCO_Code":"139913",
       "ANZSCO_Title":"Laboratory Manager"
    },
    {
       "ANZSCO_Code":"139914",
       "ANZSCO_Title":"Quality Assurance Manager"
    },
    {
       "ANZSCO_Code":"142114",
       "ANZSCO_Title":"Hair or Beauty Salon Manager"
    },
    {
       "ANZSCO_Code":"142115",
       "ANZSCO_Title":"Post Office Manager"
    },
    {
       "ANZSCO_Code":"149211",
       "ANZSCO_Title":"Call or Contact Centre Manager"
    },
    {
       "ANZSCO_Code":"149212",
       "ANZSCO_Title":"Customer Service Manager"
    },
    {
       "ANZSCO_Code":"149411",
       "ANZSCO_Title":"Fleet Manager"
    },
    {
       "ANZSCO_Code":"149413",
       "ANZSCO_Title":"Transport Company Manager"
    },
    {
       "ANZSCO_Code":"149913",
       "ANZSCO_Title":"Facilities Manager"
    },
    {
       "ANZSCO_Code":"149914",
       "ANZSCO_Title":"Financial Institution Branch Manager"
    },
    {
       "ANZSCO_Code":"211111",
       "ANZSCO_Title":"Actor"
    },
    {
       "ANZSCO_Code":"211112",
       "ANZSCO_Title":"Dancer or Choreographer"
    },
    {
       "ANZSCO_Code":"211113",
       "ANZSCO_Title":"Entertainer or Variety Artist"
    },
    {
       "ANZSCO_Code":"211211",
       "ANZSCO_Title":"Composer"
    },
    {
       "ANZSCO_Code":"211213",
       "ANZSCO_Title":"Musician"
    },
    {
       "ANZSCO_Code":"211214",
       "ANZSCO_Title":"Singer"
    },
    {
       "ANZSCO_Code":"212111",
       "ANZSCO_Title":"Artistic Director"
    },
    {
       "ANZSCO_Code":"212112",
       "ANZSCO_Title":"Media Producer"
    },
    {
       "ANZSCO_Code":"212113",
       "ANZSCO_Title":"Radio Presenter"
    },
    {
       "ANZSCO_Code":"212211",
       "ANZSCO_Title":"Author"
    },
    {
       "ANZSCO_Code":"212212",
       "ANZSCO_Title":"Book or Script Editor"
    },
    {
       "ANZSCO_Code":"212314",
       "ANZSCO_Title":"Film and Video Editor"
    },
    {
       "ANZSCO_Code":"212411",
       "ANZSCO_Title":"Copywriter"
    },
    {
       "ANZSCO_Code":"212415",
       "ANZSCO_Title":"Technical Writer"
    },
    {
       "ANZSCO_Code":"221111",
       "ANZSCO_Title":"Accountant  "
    },
    {
       "ANZSCO_Code":"221112",
       "ANZSCO_Title":"Management Accountant"
    },
    {
       "ANZSCO_Code":"221113",
       "ANZSCO_Title":"Taxation Accountant"
    },
    {
       "ANZSCO_Code":"221212",
       "ANZSCO_Title":"Corporate Treasurer"
    },
    {
       "ANZSCO_Code":"221213",
       "ANZSCO_Title":"External Auditor"
    },
    {
       "ANZSCO_Code":"221214",
       "ANZSCO_Title":"Internal Auditor"
    },
    {
       "ANZSCO_Code":"222111",
       "ANZSCO_Title":"Commodities Trader"
    },
    {
       "ANZSCO_Code":"222311",
       "ANZSCO_Title":"Financial Investment Adviser"
    },
    {
       "ANZSCO_Code":"222312",
       "ANZSCO_Title":"Financial Investment Manager"
    },
    {
       "ANZSCO_Code":"223111",
       "ANZSCO_Title":"Human Resource Adviser"
    },
    {
       "ANZSCO_Code":"223112",
       "ANZSCO_Title":"Recruitment Consultant"
    },
    {
       "ANZSCO_Code":"223113",
       "ANZSCO_Title":"Workplace Relations Adviser"
    },
    {
       "ANZSCO_Code":"224111",
       "ANZSCO_Title":"Actuary"
    },
    {
       "ANZSCO_Code":"224112",
       "ANZSCO_Title":"Mathematician"
    },
    {
       "ANZSCO_Code":"224113",
       "ANZSCO_Title":"Statistician"
    },
    {
       "ANZSCO_Code":"224211",
       "ANZSCO_Title":"Archivist"
    },
    {
       "ANZSCO_Code":"224212",
       "ANZSCO_Title":"Gallery or Museum Curator"
    },
    {
       "ANZSCO_Code":"224213",
       "ANZSCO_Title":"Health Information Manager"
    },
    {
       "ANZSCO_Code":"224214",
       "ANZSCO_Title":"Records Manager"
    },
    {
       "ANZSCO_Code":"224411",
       "ANZSCO_Title":"Intelligence Officer"
    },
    {
       "ANZSCO_Code":"224412",
       "ANZSCO_Title":"Policy Analyst"
    },
    {
       "ANZSCO_Code":"224512",
       "ANZSCO_Title":"Valuer"
    },
    {
       "ANZSCO_Code":"224711",
       "ANZSCO_Title":"Management Consultant"
    },
    {
       "ANZSCO_Code":"224712",
       "ANZSCO_Title":"Organisation and Methods Analyst"
    },
    {
       "ANZSCO_Code":"224912",
       "ANZSCO_Title":"Liaison Officer"
    },
    {
       "ANZSCO_Code":"225112",
       "ANZSCO_Title":"Market Research Analyst"
    },
    {
       "ANZSCO_Code":"225113",
       "ANZSCO_Title":"Marketing Specialist"
    },
    {
       "ANZSCO_Code":"231111",
       "ANZSCO_Title":"Aeroplane Pilot"
    },
    {
       "ANZSCO_Code":"231112",
       "ANZSCO_Title":"Air Traffic Controller"
    },
    {
       "ANZSCO_Code":"231213",
       "ANZSCO_Title":"Ship's Master"
    },
    {
       "ANZSCO_Code":"231214",
       "ANZSCO_Title":"Ship's Officer"
    },
    {
       "ANZSCO_Code":"232111",
       "ANZSCO_Title":"Architect"
    },
    {
       "ANZSCO_Code":"232112",
       "ANZSCO_Title":"Landscape Architect"
    },
    {
       "ANZSCO_Code":"232311",
       "ANZSCO_Title":"Fashion Designer"
    },
    {
       "ANZSCO_Code":"232312",
       "ANZSCO_Title":"Industrial Designer"
    },
    {
       "ANZSCO_Code":"232411",
       "ANZSCO_Title":"Graphic Designer"
    },
    {
       "ANZSCO_Code":"232412",
       "ANZSCO_Title":"Illustrator"
    },
    {
       "ANZSCO_Code":"232413",
       "ANZSCO_Title":"Multimedia Designer"
    },
    {
       "ANZSCO_Code":"232414",
       "ANZSCO_Title":"Web Designer"
    },
    {
       "ANZSCO_Code":"233111",
       "ANZSCO_Title":"Chemical Engineer"
    },
    {
       "ANZSCO_Code":"233112",
       "ANZSCO_Title":"Materials Engineer"
    },
    {
       "ANZSCO_Code":"233211",
       "ANZSCO_Title":"Civil Engineer"
    },
    {
       "ANZSCO_Code":"233212",
       "ANZSCO_Title":"Geotechnical Engineer"
    },
    {
       "ANZSCO_Code":"233213",
       "ANZSCO_Title":"Quantity Surveyor"
    },
    {
       "ANZSCO_Code":"233214",
       "ANZSCO_Title":"Structural Engineer"
    },
    {
       "ANZSCO_Code":"233215",
       "ANZSCO_Title":"Transport Engineer"
    },
    {
       "ANZSCO_Code":"233511",
       "ANZSCO_Title":"Industrial Engineer"
    },
    {
       "ANZSCO_Code":"233512",
       "ANZSCO_Title":"Mechanical Engineer"
    },
    {
       "ANZSCO_Code":"233513",
       "ANZSCO_Title":"Production or Plant Engineer"
    },
    {
       "ANZSCO_Code":"233611",
       "ANZSCO_Title":"Mining Engineer "
    },
    {
       "ANZSCO_Code":"233612",
       "ANZSCO_Title":"Petroleum Engineer"
    },
    {
       "ANZSCO_Code":"233911",
       "ANZSCO_Title":"Aeronautical Engineer"
    },
    {
       "ANZSCO_Code":"233913",
       "ANZSCO_Title":"Biomedical Engineer"
    },
    {
       "ANZSCO_Code":"233914",
       "ANZSCO_Title":"Engineering Technologist"
    },
    {
       "ANZSCO_Code":"233915",
       "ANZSCO_Title":"Environmental Engineer"
    },
    {
       "ANZSCO_Code":"233916",
       "ANZSCO_Title":"Naval Architect"
    },
    {
       "ANZSCO_Code":"234211",
       "ANZSCO_Title":"Chemist"
    },
    {
       "ANZSCO_Code":"234212",
       "ANZSCO_Title":"Food Technologist"
    },
    {
       "ANZSCO_Code":"234213",
       "ANZSCO_Title":"Wine Maker"
    },
    {
       "ANZSCO_Code":"234311",
       "ANZSCO_Title":"Conservation Officer"
    },
    {
       "ANZSCO_Code":"234312",
       "ANZSCO_Title":"Environmental Consultant"
    },
    {
       "ANZSCO_Code":"234313",
       "ANZSCO_Title":"Environmental Research Scientist"
    },
    {
       "ANZSCO_Code":"234314",
       "ANZSCO_Title":"Park Ranger"
    },
    {
       "ANZSCO_Code":"234511",
       "ANZSCO_Title":"Life Scientist  "
    },
    {
       "ANZSCO_Code":"234513",
       "ANZSCO_Title":"Biochemist"
    },
    {
       "ANZSCO_Code":"234514",
       "ANZSCO_Title":"Biotechnologist"
    },
    {
       "ANZSCO_Code":"234515",
       "ANZSCO_Title":"Botanist"
    },
    {
       "ANZSCO_Code":"234517",
       "ANZSCO_Title":"Microbiologist"
    },
    {
       "ANZSCO_Code":"234518",
       "ANZSCO_Title":"Zoologist"
    },
    {
       "ANZSCO_Code":"234911",
       "ANZSCO_Title":"Conservator"
    },
    {
       "ANZSCO_Code":"234912",
       "ANZSCO_Title":"Metallurgist"
    },
    {
       "ANZSCO_Code":"234913",
       "ANZSCO_Title":"Meteorologist"
    },
    {
       "ANZSCO_Code":"234914",
       "ANZSCO_Title":"Physicist"
    },
    {
       "ANZSCO_Code":"242111",
       "ANZSCO_Title":"University Lecturer"
    },
    {
       "ANZSCO_Code":"242112",
       "ANZSCO_Title":"University Tutor"
    },
    {
       "ANZSCO_Code":"249212",
       "ANZSCO_Title":"Dance Teacher "
    },
    {
       "ANZSCO_Code":"249214",
       "ANZSCO_Title":"Music Teacher "
    },
    {
       "ANZSCO_Code":"251211",
       "ANZSCO_Title":"Medical Diagnostic Radiographer"
    },
    {
       "ANZSCO_Code":"251212",
       "ANZSCO_Title":"Medical Radiation Therapist"
    },
    {
       "ANZSCO_Code":"251213",
       "ANZSCO_Title":"Nuclear Medicine Technologist"
    },
    {
       "ANZSCO_Code":"251214",
       "ANZSCO_Title":"Sonographer"
    },
    {
       "ANZSCO_Code":"251311",
       "ANZSCO_Title":"Environmental Health Officer"
    },
    {
       "ANZSCO_Code":"251312",
       "ANZSCO_Title":"Occupational Health and Safety Adviser"
    },
    {
       "ANZSCO_Code":"251411",
       "ANZSCO_Title":"Optometrist"
    },
    {
       "ANZSCO_Code":"251412",
       "ANZSCO_Title":"Orthoptist"
    },
    {
       "ANZSCO_Code":"251511",
       "ANZSCO_Title":"Hospital Pharmacist"
    },
    {
       "ANZSCO_Code":"251513",
       "ANZSCO_Title":"Retail Pharmacist"
    },
    {
       "ANZSCO_Code":"251911",
       "ANZSCO_Title":"Health Promotion Officer"
    },
    {
       "ANZSCO_Code":"251912",
       "ANZSCO_Title":"Orthotist or Prosthetist"
    },
    {
       "ANZSCO_Code":"252211",
       "ANZSCO_Title":"Acupuncturist"
    },
    {
       "ANZSCO_Code":"252213",
       "ANZSCO_Title":"Naturopath"
    },
    {
       "ANZSCO_Code":"252711",
       "ANZSCO_Title":"Audiologist"
    },
    {
       "ANZSCO_Code":"252712",
       "ANZSCO_Title":"Speech Pathologist"
    },
    {
       "ANZSCO_Code":"253111",
       "ANZSCO_Title":"General Practitioner"
    },
    {
       "ANZSCO_Code":"253112",
       "ANZSCO_Title":"Resident Medical Officer"
    },
    {
       "ANZSCO_Code":"253317",
       "ANZSCO_Title":"Intensive Care Specialist"
    },
    {
       "ANZSCO_Code":"253318",
       "ANZSCO_Title":"Neurologist"
    },
    {
       "ANZSCO_Code":"253321",
       "ANZSCO_Title":"Paediatrician"
    },
    {
       "ANZSCO_Code":"253324",
       "ANZSCO_Title":"Thoracic Medicine Specialist"
    },
    {
       "ANZSCO_Code":"253911",
       "ANZSCO_Title":"Dermatologist"
    },
    {
       "ANZSCO_Code":"253912",
       "ANZSCO_Title":"Emergency Medicine Specialist"
    },
    {
       "ANZSCO_Code":"253913",
       "ANZSCO_Title":"Obstetrician and Gynaecologist"
    },
    {
       "ANZSCO_Code":"253914",
       "ANZSCO_Title":"Ophthalmologist"
    },
    {
       "ANZSCO_Code":"253915",
       "ANZSCO_Title":"Pathologist"
    },
    {
       "ANZSCO_Code":"253917",
       "ANZSCO_Title":"Diagnostic and Interventional Radiologist"
    },
    {
       "ANZSCO_Code":"254211",
       "ANZSCO_Title":"Nurse Educator"
    },
    {
       "ANZSCO_Code":"254212",
       "ANZSCO_Title":"Nurse Researcher"
    },
    {
       "ANZSCO_Code":"254411",
       "ANZSCO_Title":"Nurse Practitioner"
    },
    {
       "ANZSCO_Code":"254415",
       "ANZSCO_Title":"Registered Nurse (Critical Care and Emergency)"
    },
    {
       "ANZSCO_Code":"254422",
       "ANZSCO_Title":"Registered Nurse (Mental Health)"
    },
    {
       "ANZSCO_Code":"254424",
       "ANZSCO_Title":"Registered Nurse (Surgical)"
    },
    {
       "ANZSCO_Code":"261211",
       "ANZSCO_Title":"Multimedia Specialist"
    },
    {
       "ANZSCO_Code":"261212",
       "ANZSCO_Title":"Web Developer"
    },
    {
       "ANZSCO_Code":"261311",
       "ANZSCO_Title":"Analyst Programmer"
    },
    {
       "ANZSCO_Code":"261312",
       "ANZSCO_Title":"Developer Programmer"
    },
    {
       "ANZSCO_Code":"261313",
       "ANZSCO_Title":"Software Engineer"
    },
    {
       "ANZSCO_Code":"261314",
       "ANZSCO_Title":"Software Tester"
    },
    {
       "ANZSCO_Code":"262111",
       "ANZSCO_Title":"Database Administrator"
    },
    {
       "ANZSCO_Code":"262112",
       "ANZSCO_Title":"ICT Security Specialist"
    },
    {
       "ANZSCO_Code":"262113",
       "ANZSCO_Title":"Systems Administrator"
    },
    {
       "ANZSCO_Code":"263111",
       "ANZSCO_Title":"Computer Network and Systems Engineer"
    },
    {
       "ANZSCO_Code":"263112",
       "ANZSCO_Title":"Network Administrator"
    },
    {
       "ANZSCO_Code":"263113",
       "ANZSCO_Title":"Network Analyst"
    },
    {
       "ANZSCO_Code":"263211",
       "ANZSCO_Title":"ICT Quality Assurance Engineer"
    },
    {
       "ANZSCO_Code":"263212",
       "ANZSCO_Title":"ICT Support Engineer"
    },
    {
       "ANZSCO_Code":"263213",
       "ANZSCO_Title":"ICT Systems Test Engineer"
    },
    {
       "ANZSCO_Code":"272111",
       "ANZSCO_Title":"Careers Counsellor"
    },
    {
       "ANZSCO_Code":"272112",
       "ANZSCO_Title":"Drug and Alcohol Counsellor"
    },
    {
       "ANZSCO_Code":"272113",
       "ANZSCO_Title":"Family and Marriage Counsellor"
    },
    {
       "ANZSCO_Code":"272114",
       "ANZSCO_Title":"Rehabilitation Counsellor"
    },
    {
       "ANZSCO_Code":"272115",
       "ANZSCO_Title":"Student Counsellor"
    },
    {
       "ANZSCO_Code":"272311",
       "ANZSCO_Title":"Clinical Psychologist"
    },
    {
       "ANZSCO_Code":"272312",
       "ANZSCO_Title":"Educational Psychologist"
    },
    {
       "ANZSCO_Code":"272313",
       "ANZSCO_Title":"Organisational Psychologist"
    },
    {
       "ANZSCO_Code":"272411",
       "ANZSCO_Title":"Historian"
    },
    {
       "ANZSCO_Code":"272412",
       "ANZSCO_Title":"Interpreter"
    },
    {
       "ANZSCO_Code":"272413",
       "ANZSCO_Title":"Translator"
    },
    {
       "ANZSCO_Code":"272612",
       "ANZSCO_Title":"Recreation Officer"
    },
    {
       "ANZSCO_Code":"272613",
       "ANZSCO_Title":"Welfare Worker"
    },
    {
       "ANZSCO_Code":"311211",
       "ANZSCO_Title":"Anaesthetic Technician"
    },
    {
       "ANZSCO_Code":"311212",
       "ANZSCO_Title":"Cardiac Technician"
    },
    {
       "ANZSCO_Code":"311213",
       "ANZSCO_Title":"Medical Laboratory Technician"
    },
    {
       "ANZSCO_Code":"311214",
       "ANZSCO_Title":"Operating Theatre Technician"
    },
    {
       "ANZSCO_Code":"311215",
       "ANZSCO_Title":"Pharmacy Technician"
    },
    {
       "ANZSCO_Code":"311216",
       "ANZSCO_Title":"Pathology Collector"
    },
    {
       "ANZSCO_Code":"311411",
       "ANZSCO_Title":"Chemistry Technician"
    },
    {
       "ANZSCO_Code":"311412",
       "ANZSCO_Title":"Earth Science Technician"
    },
    {
       "ANZSCO_Code":"311413",
       "ANZSCO_Title":"Life Science Technician"
    },
    {
       "ANZSCO_Code":"312111",
       "ANZSCO_Title":"Architectural Draftsperson"
    },
    {
       "ANZSCO_Code":"312112",
       "ANZSCO_Title":"Building Associate"
    },
    {
       "ANZSCO_Code":"312113",
       "ANZSCO_Title":"Building Inspector"
    },
    {
       "ANZSCO_Code":"312114",
       "ANZSCO_Title":"Construction Estimator"
    },
    {
       "ANZSCO_Code":"312116",
       "ANZSCO_Title":"Surveying or Spatial Science Technician"
    },
    {
       "ANZSCO_Code":"312211",
       "ANZSCO_Title":"Civil Engineering Draftsperson"
    },
    {
       "ANZSCO_Code":"312212",
       "ANZSCO_Title":"Civil Engineering Technician"
    },
    {
       "ANZSCO_Code":"312311",
       "ANZSCO_Title":"Electrical Engineering Draftsperson"
    },
    {
       "ANZSCO_Code":"312312",
       "ANZSCO_Title":"Electrical Engineering Technician"
    },
    {
       "ANZSCO_Code":"312511",
       "ANZSCO_Title":"Mechanical Engineering Draftsperson"
    },
    {
       "ANZSCO_Code":"312512",
       "ANZSCO_Title":"Mechanical Engineering Technician"
    },
    {
       "ANZSCO_Code":"313111",
       "ANZSCO_Title":"Hardware Technician"
    },
    {
       "ANZSCO_Code":"313112",
       "ANZSCO_Title":"ICT Customer Support Officer"
    },
    {
       "ANZSCO_Code":"313113",
       "ANZSCO_Title":"Web Administrator"
    },
    {
       "ANZSCO_Code":"321211",
       "ANZSCO_Title":"Motor Mechanic  "
    },
    {
       "ANZSCO_Code":"321212",
       "ANZSCO_Title":"Diesel Motor Mechanic"
    },
    {
       "ANZSCO_Code":"321213",
       "ANZSCO_Title":"Motorcycle Mechanic"
    },
    {
       "ANZSCO_Code":"321214",
       "ANZSCO_Title":"Small Engine Mechanic"
    },
    {
       "ANZSCO_Code":"322311",
       "ANZSCO_Title":"Metal Fabricator"
    },
    {
       "ANZSCO_Code":"322313",
       "ANZSCO_Title":"Welder"
    },
    {
       "ANZSCO_Code":"323111",
       "ANZSCO_Title":"Aircraft Maintenance Engineer (Avionics)"
    },
    {
       "ANZSCO_Code":"323112",
       "ANZSCO_Title":"Aircraft Maintenance Engineer (Mechanical)"
    },
    {
       "ANZSCO_Code":"323211",
       "ANZSCO_Title":"Fitter  "
    },
    {
       "ANZSCO_Code":"323214",
       "ANZSCO_Title":"Metal Machinist "
    },
    {
       "ANZSCO_Code":"323313",
       "ANZSCO_Title":"Locksmith"
    },
    {
       "ANZSCO_Code":"323314",
       "ANZSCO_Title":"Precision Instrument Maker and Repairer"
    },
    {
       "ANZSCO_Code":"323316",
       "ANZSCO_Title":"Watch and Clock Maker and Repairer"
    },
    {
       "ANZSCO_Code":"323411",
       "ANZSCO_Title":"Engineering Patternmaker"
    },
    {
       "ANZSCO_Code":"323412",
       "ANZSCO_Title":"Toolmaker"
    },
    {
       "ANZSCO_Code":"331111",
       "ANZSCO_Title":"Bricklayer"
    },
    {
       "ANZSCO_Code":"331112",
       "ANZSCO_Title":"Stonemason"
    },
    {
       "ANZSCO_Code":"331212",
       "ANZSCO_Title":"Carpenter"
    },
    {
       "ANZSCO_Code":"331213",
       "ANZSCO_Title":"Joiner"
    },
    {
       "ANZSCO_Code":"333211",
       "ANZSCO_Title":"Fibrous Plasterer"
    },
    {
       "ANZSCO_Code":"333212",
       "ANZSCO_Title":"Solid Plasterer"
    },
    {
       "ANZSCO_Code":"334111",
       "ANZSCO_Title":"Plumber  "
    },
    {
       "ANZSCO_Code":"334113",
       "ANZSCO_Title":"Drainer"
    },
    {
       "ANZSCO_Code":"334114",
       "ANZSCO_Title":"Gasfitter"
    },
    {
       "ANZSCO_Code":"334115",
       "ANZSCO_Title":"Roof Plumber"
    },
    {
       "ANZSCO_Code":"341113",
       "ANZSCO_Title":"Lift Mechanic"
    },
    {
       "ANZSCO_Code":"342311",
       "ANZSCO_Title":"Business Machine Mechanic"
    },
    {
       "ANZSCO_Code":"342312",
       "ANZSCO_Title":"Communications Operator"
    },
    {
       "ANZSCO_Code":"342313",
       "ANZSCO_Title":"Electronic Equipment Trades Worker"
    },
    {
       "ANZSCO_Code":"342314",
       "ANZSCO_Title":"Electronic Instrument Trades Worker  "
    },
    {
       "ANZSCO_Code":"342413",
       "ANZSCO_Title":"Telecommunications Linesworker"
    },
    {
       "ANZSCO_Code":"361113",
       "ANZSCO_Title":"Pet Groomer"
    },
    {
       "ANZSCO_Code":"362212",
       "ANZSCO_Title":"Arborist"
    },
    {
       "ANZSCO_Code":"392111",
       "ANZSCO_Title":"Print Finisher"
    },
    {
       "ANZSCO_Code":"392112",
       "ANZSCO_Title":"Screen Printer"
    },
    {
       "ANZSCO_Code":"393212",
       "ANZSCO_Title":"Clothing Patternmaker"
    },
    {
       "ANZSCO_Code":"393213",
       "ANZSCO_Title":"Dressmaker or Tailor"
    },
    {
       "ANZSCO_Code":"394211",
       "ANZSCO_Title":"Furniture Finisher"
    },
    {
       "ANZSCO_Code":"394213",
       "ANZSCO_Title":"Wood Machinist"
    },
    {
       "ANZSCO_Code":"399212",
       "ANZSCO_Title":"Gas or Petroleum Operator"
    },
    {
       "ANZSCO_Code":"399213",
       "ANZSCO_Title":"Power Generation Plant Operator"
    },
    {
       "ANZSCO_Code":"399311",
       "ANZSCO_Title":"Gallery or Museum Technician"
    },
    {
       "ANZSCO_Code":"399312",
       "ANZSCO_Title":"Library Technician"
    },
    {
       "ANZSCO_Code":"399511",
       "ANZSCO_Title":"Broadcast Transmitter Operator"
    },
    {
       "ANZSCO_Code":"399512",
       "ANZSCO_Title":"Camera Operator "
    },
    {
       "ANZSCO_Code":"399514",
       "ANZSCO_Title":"Make Up Artist"
    },
    {
       "ANZSCO_Code":"399515",
       "ANZSCO_Title":"Musical Instrument Maker or Repairer"
    },
    {
       "ANZSCO_Code":"399516",
       "ANZSCO_Title":"Sound Technician"
    },
    {
       "ANZSCO_Code":"399911",
       "ANZSCO_Title":"Diver"
    },
    {
       "ANZSCO_Code":"399913",
       "ANZSCO_Title":"Optical Dispenser"
    },
    {
       "ANZSCO_Code":"411211",
       "ANZSCO_Title":"Dental Hygienist"
    },
    {
       "ANZSCO_Code":"411213",
       "ANZSCO_Title":"Dental Technician"
    },
    {
       "ANZSCO_Code":"411214",
       "ANZSCO_Title":"Dental Therapist"
    },
    {
       "ANZSCO_Code":"411411",
       "ANZSCO_Title":"Enrolled Nurse"
    },
    {
       "ANZSCO_Code":"411412",
       "ANZSCO_Title":"Mothercraft Nurse"
    },
    {
       "ANZSCO_Code":"411711",
       "ANZSCO_Title":"Community Worker"
    },
    {
       "ANZSCO_Code":"411712",
       "ANZSCO_Title":"Disabilities Services Officer"
    },
    {
       "ANZSCO_Code":"411713",
       "ANZSCO_Title":"Family Support Worker"
    },
    {
       "ANZSCO_Code":"411714",
       "ANZSCO_Title":"Parole or Probation Officer"
    },
    {
       "ANZSCO_Code":"411715",
       "ANZSCO_Title":"Residential Care Officer"
    },
    {
       "ANZSCO_Code":"411716",
       "ANZSCO_Title":"Youth Worker"
    },
    {
       "ANZSCO_Code":"421111",
       "ANZSCO_Title":"Child Care Worker"
    },
    {
       "ANZSCO_Code":"421113",
       "ANZSCO_Title":"Nanny"
    },
    {
       "ANZSCO_Code":"422112",
       "ANZSCO_Title":"Integration Aide"
    },
    {
       "ANZSCO_Code":"423311",
       "ANZSCO_Title":"Hospital Orderly"
    },
    {
       "ANZSCO_Code":"423312",
       "ANZSCO_Title":"Nursing Support Worker"
    },
    {
       "ANZSCO_Code":"423313",
       "ANZSCO_Title":"Personal Care Assistant"
    },
    {
       "ANZSCO_Code":"423314",
       "ANZSCO_Title":"Therapy Aide"
    },
    {
       "ANZSCO_Code":"431111",
       "ANZSCO_Title":"Bar Attendant"
    },
    {
       "ANZSCO_Code":"431112",
       "ANZSCO_Title":"Barista"
    },
    {
       "ANZSCO_Code":"431912",
       "ANZSCO_Title":"Doorperson or Luggage Porter"
    },
    {
       "ANZSCO_Code":"441211",
       "ANZSCO_Title":"Emergency Service Worker"
    },
    {
       "ANZSCO_Code":"441212",
       "ANZSCO_Title":"Fire Fighter"
    },
    {
       "ANZSCO_Code":"441311",
       "ANZSCO_Title":"Detective"
    },
    {
       "ANZSCO_Code":"441312",
       "ANZSCO_Title":"Police Officer"
    },
    {
       "ANZSCO_Code":"442214",
       "ANZSCO_Title":"Private Investigator"
    },
    {
       "ANZSCO_Code":"442215",
       "ANZSCO_Title":"Retail Loss Prevention Officer"
    },
    {
       "ANZSCO_Code":"442216",
       "ANZSCO_Title":"Security Consultant"
    },
    {
       "ANZSCO_Code":"442217",
       "ANZSCO_Title":"Security Officer"
    },
    {
       "ANZSCO_Code":"451612",
       "ANZSCO_Title":"Travel Consultant"
    },
    {
       "ANZSCO_Code":"452322",
       "ANZSCO_Title":"Sports Umpire"
    },
    {
       "ANZSCO_Code":"452414",
       "ANZSCO_Title":"Lifeguard"
    },
    {
       "ANZSCO_Code":"511111",
       "ANZSCO_Title":"Contract Administrator"
    },
    {
       "ANZSCO_Code":"511112",
       "ANZSCO_Title":"Program or Project Administrator"
    },
    {
       "ANZSCO_Code":"512211",
       "ANZSCO_Title":"Health Practice Manager"
    },
    {
       "ANZSCO_Code":"521211",
       "ANZSCO_Title":"Secretary  "
    },
    {
       "ANZSCO_Code":"521212",
       "ANZSCO_Title":"Legal Secretary"
    },
    {
       "ANZSCO_Code":"532111",
       "ANZSCO_Title":"Data Entry Operator"
    },
    {
       "ANZSCO_Code":"532113",
       "ANZSCO_Title":"Word Processing Operator"
    },
    {
       "ANZSCO_Code":"541111",
       "ANZSCO_Title":"Call or Contact Centre Team Leader"
    },
    {
       "ANZSCO_Code":"541112",
       "ANZSCO_Title":"Call or Contact Centre Operator"
    },
    {
       "ANZSCO_Code":"542111",
       "ANZSCO_Title":"Receptionist  "
    },
    {
       "ANZSCO_Code":"542112",
       "ANZSCO_Title":"Admissions Clerk"
    },
    {
       "ANZSCO_Code":"542113",
       "ANZSCO_Title":"Hotel or Motel Receptionist"
    },
    {
       "ANZSCO_Code":"542114",
       "ANZSCO_Title":"Medical Receptionist"
    },
    {
       "ANZSCO_Code":"551111",
       "ANZSCO_Title":"Accounts Clerk"
    },
    {
       "ANZSCO_Code":"551112",
       "ANZSCO_Title":"Cost Clerk"
    },
    {
       "ANZSCO_Code":"552312",
       "ANZSCO_Title":"Insurance Consultant"
    },
    {
       "ANZSCO_Code":"552314",
       "ANZSCO_Title":"Statistical Clerk"
    },
    {
       "ANZSCO_Code":"561211",
       "ANZSCO_Title":"Courier"
    },
    {
       "ANZSCO_Code":"561212",
       "ANZSCO_Title":"Postal Delivery Officer"
    },
    {
       "ANZSCO_Code":"561411",
       "ANZSCO_Title":"Mail Clerk"
    },
    {
       "ANZSCO_Code":"561912",
       "ANZSCO_Title":"Meter Reader"
    },
    {
       "ANZSCO_Code":"561913",
       "ANZSCO_Title":"Parking Inspector"
    },
    {
       "ANZSCO_Code":"591112",
       "ANZSCO_Title":"Production Clerk"
    },
    {
       "ANZSCO_Code":"591113",
       "ANZSCO_Title":"Purchasing Officer"
    },
    {
       "ANZSCO_Code":"591115",
       "ANZSCO_Title":"Stock Clerk"
    },
    {
       "ANZSCO_Code":"591116",
       "ANZSCO_Title":"Warehouse Administrator"
    },
    {
       "ANZSCO_Code":"591117",
       "ANZSCO_Title":"Order Clerk"
    },
    {
       "ANZSCO_Code":"599511",
       "ANZSCO_Title":"Customs Officer"
    },
    {
       "ANZSCO_Code":"599512",
       "ANZSCO_Title":"Immigration Officer"
    },
    {
       "ANZSCO_Code":"599516",
       "ANZSCO_Title":"Taxation Inspector"
    },
    {
       "ANZSCO_Code":"599518",
       "ANZSCO_Title":"Transport Operations Inspector"
    },
    {
       "ANZSCO_Code":"599913",
       "ANZSCO_Title":"Proof Reader"
    },
    {
       "ANZSCO_Code":"599914",
       "ANZSCO_Title":"Radio Despatcher"
    },
    {
       "ANZSCO_Code":"599915",
       "ANZSCO_Title":"Clinical Coder"
    },
    {
       "ANZSCO_Code":"599916",
       "ANZSCO_Title":"Facilities Administrator"
    },
    {
       "ANZSCO_Code":"612112",
       "ANZSCO_Title":"Property Manager"
    },
    {
       "ANZSCO_Code":"612114",
       "ANZSCO_Title":"Real Estate Agent"
    },
    {
       "ANZSCO_Code":"612115",
       "ANZSCO_Title":"Real Estate Representative"
    },
    {
       "ANZSCO_Code":"621311",
       "ANZSCO_Title":"Motor Vehicle or Caravan Salesperson"
    },
    {
       "ANZSCO_Code":"621312",
       "ANZSCO_Title":"Motor Vehicle Parts Interpreter"
    },
    {
       "ANZSCO_Code":"621911",
       "ANZSCO_Title":"Materials Recycler"
    },
    {
       "ANZSCO_Code":"639111",
       "ANZSCO_Title":"Model"
    },
    {
       "ANZSCO_Code":"639112",
       "ANZSCO_Title":"Sales Demonstrator"
    },
    {
       "ANZSCO_Code":"639211",
       "ANZSCO_Title":"Retail Buyer"
    },
    {
       "ANZSCO_Code":"711114",
       "ANZSCO_Title":"Stone Processing Machine Operator"
    },
    {
       "ANZSCO_Code":"711912",
       "ANZSCO_Title":"Motion Picture Projectionist"
    },
    {
       "ANZSCO_Code":"711914",
       "ANZSCO_Title":"Sterilisation Technician"
    },
    {
       "ANZSCO_Code":"712211",
       "ANZSCO_Title":"Driller"
    },
    {
       "ANZSCO_Code":"712212",
       "ANZSCO_Title":"Miner"
    },
    {
       "ANZSCO_Code":"712213",
       "ANZSCO_Title":"Shot Firer"
    },
    {
       "ANZSCO_Code":"712911",
       "ANZSCO_Title":"Boiler or Engine Operator"
    },
    {
       "ANZSCO_Code":"712912",
       "ANZSCO_Title":"Bulk Materials Handling Plant Operator"
    },
    {
       "ANZSCO_Code":"712915",
       "ANZSCO_Title":"Concrete Pump Operator"
    },
    {
       "ANZSCO_Code":"712917",
       "ANZSCO_Title":"Railway Signal Operator"
    },
    {
       "ANZSCO_Code":"712921",
       "ANZSCO_Title":"Waste Water or Water Plant Operator"
    },
    {
       "ANZSCO_Code":"712922",
       "ANZSCO_Title":"Weighbridge Operator"
    },
    {
       "ANZSCO_Code":"721111",
       "ANZSCO_Title":"Agricultural and Horticultural Mobile Plant Operator"
    },
    {
       "ANZSCO_Code":"721211",
       "ANZSCO_Title":"Earthmoving Plant Operator  "
    },
    {
       "ANZSCO_Code":"721212",
       "ANZSCO_Title":"Backhoe Operator"
    },
    {
       "ANZSCO_Code":"721213",
       "ANZSCO_Title":"Bulldozer Operator"
    },
    {
       "ANZSCO_Code":"721214",
       "ANZSCO_Title":"Excavator Operator"
    },
    {
       "ANZSCO_Code":"721215",
       "ANZSCO_Title":"Grader Operator"
    },
    {
       "ANZSCO_Code":"721216",
       "ANZSCO_Title":"Loader Operator"
    },
    {
       "ANZSCO_Code":"721913",
       "ANZSCO_Title":"Paving Plant Operator"
    },
    {
       "ANZSCO_Code":"721915",
       "ANZSCO_Title":"Road Roller Operator"
    },
    {
       "ANZSCO_Code":"731311",
       "ANZSCO_Title":"Train Driver"
    },
    {
       "ANZSCO_Code":"821111",
       "ANZSCO_Title":"Builder's Labourer"
    },
    {
       "ANZSCO_Code":"821411",
       "ANZSCO_Title":"Building Insulation Installer"
    },
    {
       "ANZSCO_Code":"821412",
       "ANZSCO_Title":"Home Improvement Installer"
    },
    {
       "ANZSCO_Code":"821711",
       "ANZSCO_Title":"Construction Rigger"
    },
    {
       "ANZSCO_Code":"821712",
       "ANZSCO_Title":"Scaffolder"
    },
    {
       "ANZSCO_Code":"821713",
       "ANZSCO_Title":"Steel Fixer"
    },
    {
       "ANZSCO_Code":"821714",
       "ANZSCO_Title":"Structural Steel Erector"
    },
    {
       "ANZSCO_Code":"821911",
       "ANZSCO_Title":"Crane Chaser"
    },
    {
       "ANZSCO_Code":"821912",
       "ANZSCO_Title":"Driller's Assistant"
    },
    {
       "ANZSCO_Code":"821913",
       "ANZSCO_Title":"Lagger"
    },
    {
       "ANZSCO_Code":"821914",
       "ANZSCO_Title":"Mining Support Worker"
    },
    {
       "ANZSCO_Code":"831211",
       "ANZSCO_Title":"Meat Boner and Slicer"
    },
    {
       "ANZSCO_Code":"831212",
       "ANZSCO_Title":"Slaughterer"
    },
    {
       "ANZSCO_Code":"839311",
       "ANZSCO_Title":"Product Examiner"
    },
    {
       "ANZSCO_Code":"839312",
       "ANZSCO_Title":"Product Grader"
    },
    {
       "ANZSCO_Code":"839313",
       "ANZSCO_Title":"Product Tester"
    },
    {
       "ANZSCO_Code":"839912",
       "ANZSCO_Title":"Chemical Plant Worker"
    },
    {
       "ANZSCO_Code":"839918",
       "ANZSCO_Title":"Recycling Worker"
    },
    {
       "ANZSCO_Code":"841311",
       "ANZSCO_Title":"Forestry Worker"
    },
    {
       "ANZSCO_Code":"841312",
       "ANZSCO_Title":"Logging Assistant"
    },
    {
       "ANZSCO_Code":"841313",
       "ANZSCO_Title":"Tree Faller"
    },
    {
       "ANZSCO_Code":"841911",
       "ANZSCO_Title":"Hunter-Trapper"
    },
    {
       "ANZSCO_Code":"841913",
       "ANZSCO_Title":"Pest Controller"
    },
    {
       "ANZSCO_Code":"899211",
       "ANZSCO_Title":"Deck Hand"
    },
    {
       "ANZSCO_Code":"899212",
       "ANZSCO_Title":"Fishing Hand"
    },
    {
       "ANZSCO_Code":"899412",
       "ANZSCO_Title":"Autoglazier"
    },
    {
       "ANZSCO_Code":"899415",
       "ANZSCO_Title":"Tyre Fitter"
    },
    {
       "ANZSCO_Code":"899911",
       "ANZSCO_Title":"Bicycle Mechanic"
    },
    {
       "ANZSCO_Code":"899912",
       "ANZSCO_Title":"Car Park Attendant"
    },
    {
       "ANZSCO_Code":"899913",
       "ANZSCO_Title":"Crossing Supervisor"
    },
    {
       "ANZSCO_Code":"899914",
       "ANZSCO_Title":"Electrical or Telecommunications Trades Assistant"
    },
    {
       "ANZSCO_Code":"899915",
       "ANZSCO_Title":"Leaflet or Newspaper Deliverer"
    },
    {
       "ANZSCO_Code":"899918",
       "ANZSCO_Title":"Sign Erector"
    },
    {
       "ANZSCO_Code":"899921",
       "ANZSCO_Title":"Ticket Collector or Usher"
    },
    {
       "ANZSCO_Code":"899923",
       "ANZSCO_Title":"Road Traffic Controller"
    },
    {
       "ANZSCO_Code":"254412",
       "ANZSCO_Title":"Registered Nurse (Aged Care)"
    },
    {
       "ANZSCO_Code":"254413",
       "ANZSCO_Title":"Registered Nurse (Child and Family Health)"
    },
    {
       "ANZSCO_Code":"254414",
       "ANZSCO_Title":"Registered Nurse (Community Health)"
    },
    {
       "ANZSCO_Code":"254416",
       "ANZSCO_Title":"Registered Nurse (Developmental Disability)"
    },
    {
       "ANZSCO_Code":"254417",
       "ANZSCO_Title":"Registered Nurse (Disability and Rehabilitation)"
    },
    {
       "ANZSCO_Code":"254418",
       "ANZSCO_Title":"Registered Nurse (Medical)"
    },
    {
       "ANZSCO_Code":"254421",
       "ANZSCO_Title":"Registered Nurse (Medical Practice)"
    },
    {
       "ANZSCO_Code":"254423",
       "ANZSCO_Title":"Registered Nurse (Perioperative)"
    },
    {
       "ANZSCO_Code":"254425",
       "ANZSCO_Title":"Registered Nurse (Paediatrics)"
    }
 ]};
const dummyJobs = JSON.parse(JSON.stringify(dummyData));
let sample = []
dummyJobs.jobs.map((item) => {
    sample.push(item)
})
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        fontSize:'20px'
      },
    select:{
      textAlign:'center',
      marginTop:'40px'
    }
  }));

export default function SelectAuto() { 
  const classes = useStyles();
  const [jobs,setJobs] = useState([]);
  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const [bucket1, setBucket1] = React.useState([]);
  const [bucket2, setBucket2] = React.useState([]);
  const [bucketstatus,setBucketStatus] = React.useState(1);

  
  const handleChange = async (event) => {
    if(value == undefined || value == '') {
        alert("SELECT A JOB ROLE");
       // event.prevent.default()
        return;
    }
      setBucketStatus(event.target.value)
      if(event.target.value === 1){
        //findJobMatches(value,event.target.value)
       const result = await findJobMatchesBucket2(value,event.target.value);
        await setBucket1(result)  
      }
      if(event.target.value === 2){
        console.log(bucketstatus)

        const result = await findJobMatchesBucket2(value,event.target.value);
        await setBucket1(result)  
    }
  };
 // const [inputValue, setInputValue] = React.useState('');

  const getJobs = async () =>{
    const data = fetch('/jobs')
                .then(res => res.json())
                .then(daa => {
                    //return daa;
                    setJobs(Object.keys(daa).map((key) => {
                       // if(daa[key].item[0]) {
                           // return daa[key].item[0]
                        //}
                    }))
                })
    return data;
}
const setSelectedArray = [];
  let matchedArray = [];
  let displayJobs = [];
  const bucket2Comparison =(array1,array2) =>{
    let scoreArray = []
    if((array1 - array2 > 0)) {
        scoreArray.push(array1 - array2)
    }
    if((array1 - array2 < 0)) {
        scoreArray.push(array1 - array2)
    }  
  }
  let bucket2Array;
  let bucket2ArrayRest;
  let allMatchedArray;
  let notMatchedArray;

const findJobMatchesBucket2 = async (jobCode) => {
    return new Promise(resolve => fetch('/skills`')
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

                        if(matchedArray.length >= 7) {
                            displayJobs.push(matchedArray)
                        }
                    })
                    resolve(displayJobs);
                }))
            }
  const findJobMatches = async (jobCode,bucket) => {
    return new Promise(resolve => fetch('/skills')
                .then(res => res.json())
                .then(data => {
                    if(data) {
                        data[jobCode].map((selectedItem) => {
                            setSelectedArray.push(selectedItem);
                        })
                        Object.values(data).map((item) => {
                            matchedArray = item.filter((matchedJob,index) => {
                                return  ((setSelectedArray[index].Core_Competencies === matchedJob.Core_Competencies ) &&
                                        (setSelectedArray[index].Score === matchedJob.Score )&&
                                        ((setSelectedArray[index].ANZSCO_Title !== matchedJob.ANZSCO_Title ))) 
                                        })
                            if(bucket === 1) {
                                if(matchedArray.length === 10) {
                                    displayJobs.push(matchedArray)
                                }
                            }
                            if(bucket === 2) {
                                if(matchedArray.length >= 7) {
                                    displayJobs.push(matchedArray)
                                }
                            }                       
                        })
                    }
                    resolve(displayJobs);
                }))
            }
  const changeValue = async (event,newValue) => {
      console.log(bucketstatus)
         setValue((prevState) =>  newValue.ANZSCO_Code )
        const result = await findJobMatches(newValue.ANZSCO_Code,bucketstatus);
        await setBucket1(result)  
  }
  useEffect(() => {

  },[bucketstatus])
  return (
    <>
    <div className={classes.root}>
    <Grid container spacing={3}>
        <Grid item xs>
        </Grid>
        <Grid className={classes.select} item xs={10} md={6}>
        <Typography  variant="h6" gutterBottom>Career Paths</Typography>

        <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bucketstatus}
          onChange={handleChange}
        >
          <MenuItem value={1}>Similar To</MenuItem>
          <MenuItem value={2}>To Upgrade From</MenuItem>
        </Select>
      </FormControl>
      
        <div>
        {  <Autocomplete
                    id="free-solo-demo"
                    options={sample}
                    inputValue={inputValue}
                    onChange={(event, newValue) => {
                        changeValue(event,newValue)
                    }}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue)
                    }}
                    getOptionLabel={(option) => option.ANZSCO_Title}
                    renderInput={(params) => (
                    <TextField {...params} label="Select A Job" margin="normal" variant="outlined" />
                    )}/>
    }
                </div>
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>
            </div>  
            { <ShowData bucket1={bucket1} bucketStatus={bucketstatus}/> }
            </>
  );
}
