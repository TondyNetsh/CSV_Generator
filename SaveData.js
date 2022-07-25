// Ask user to enter number of records
const records = window.prompt("Enter number of records");

let provinceName = [];

const transaction = transactionType();
const product = productType();
const program = programType();
const occupant = occupanctType();
const equity = equityTakeOutAmount();
const variance = varianceExceptionReceived();
const city = cityName();
const province = provinceCode();
const postal = postalCode();
const fsa = flexibleSpendingAccount();
const dwelling = dwellingType();
const approved = approvedLendingAreas();
const loan = loanAmount();
const policy = policyException();
const ltv = loanToValue();
const downPayment = downPaymentSource();
const credit = creditScore();
const primaryApp = primaryApplicantInd();
const gds = grossDebtService();
const tds = totalDebtService();
const qualifiedInc = qualifiedIncomeInd();
const totalInc = totalIncome();
const residence = residencyType();
const area = areaName();
const purchase = purchasePrice();
const amortization = amortazationTermsInYears();
const insurance = previouslyInsure();
const property = propertyOwnershipType();
const baseAmnt = baseAmount();

// Create CSV file data in an array
let csvFileData = {
    "transactionType": transaction,
    "productType": product,
    "programType": program,
    "occupanctType": occupant,
    "equityTakeOutAmount":equity,
    "varianceExceptionReceived":variance,
    "cityName": city,
    "provinceCode": province,
    "postalCode": postal,
    "fsa": fsa,
    "dwellingType": dwelling,
    "approvedLendingAreas": approved,
    "loanAmount": loan,
    "policyException":policy,
    "ltv":ltv,
    "downPaymentSource":downPayment,
    "creditScore":credit,
    "primaryApplicantInd":primaryApp,
    "gds":gds,
    "tds":tds,
    "qualifiedIncomeInd":qualifiedInc,
    "totalIncome":totalInc,
    "residencyType":residence,
    "areaName":area,
    "purchasePrice":purchase,
    "amortizationTermsInYears":amortization,
    "previouslyInsure":insurance,
    "propertyOwnershipType":property,
    "baseAmount":baseAmnt
};

const download = function (data) {

    // Creating a Blob for having a csv file format
    // and passing the data with type
    const blob = new Blob([data], { type: 'text/csv' });

    // Creating an object for downloading url
    const url = window.URL.createObjectURL(blob)

    // Creating an anchor(a) tag of HTML
    const a = document.createElement('a')

    // Passing the blob downloading url
    a.setAttribute('href', url)

    // Setting the anchor tag attribute for downloading
    // and passing the download file name
    a.setAttribute('download', 'Bank of Canada.csv');

    // Performing a download with click
    a.click()
}
//create a user-defined function to download CSV file
function download_csv_file() {
    const csvData = csvmaker(csvFileData);
    download(csvData);
}
function transactionType() {
    let transaction = ["Refinance", "Transfer", "Purchase"];
    let transType = [];
    for (let i = 0; i < records; i++)
    {
        this.index = parseInt((Math.random() * 3));
        transType[i] = transaction[this.index];
    }
    return transType;
}
function productType() {
    let product = ["Prime", "Alternative"];
    let prodType = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        this.index = parseInt((Math.random() * 2));
        prodType[i] = product[this.index];
    }
    return prodType;
}
function programType() {
    let program = ["Standard", "NewToCanada", "BFSAssist", "CreditRestorer", "Rental"];
    let progType = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        this.index = parseInt((Math.random() * 5));
        progType[i] = program[this.index];
    }
    return progType;
}
function occupanctType() {
    let occupant = ["OwnerOccupied", "OwnerOccupiedPlusRental", "Rental", "SecondHome"];
    let occupy = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        this.index = parseInt((Math.random() * 4));
        occupy[i] = occupant[this.index];
    }
    return occupy;
}
function equityTakeOutAmount() {
    let equity = Array(records).fill(null);
    let amount = 0;
    let transaction = transactionType();

    for (let i = 0; i < records; i++)
    {
        if (transaction[i] === "Purchase")
        {
            amount = parseInt(Math.random() * 50000000);
            equity[i] = amount;
        }
        else if (transaction[i] === "Refinance")
        {
            amount = parseInt((Math.random() * 200000));
            equity[i] = amount;
        }
        else if (transaction[i] === "Transfer")
        {
            amount = parseInt((Math.random())) + 200000;
            equity[i] = amount;
        }
    }
    return equity;
}
function varianceExceptionReceived() {
    let variance = ["Received", "Not Received"];
    let varienceException = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        this.index = parseInt(Math.random() * 2);
        let equityAmt = parseInt(equity[i]);

        if (equityAmt > 200000) {
            varienceException[i] = "Received";
        }
        else {
            varienceException[i] = "Not Received";
        }
    }
    return varienceException;
}
function cityName() {
    //provinceName = Array(records).fill(0);

    var cities = {"AB": ["Airdrie", "Grande Prairie", "Red Deer", "Beaumont", "Hanna", "St. Albert", "Bonnyville", "Hinton", "Spruce Grove", "Brazeau", "Irricana", "Strathcona County",
            "Breton", "Lacombe", "Strathmore", "Calgary", "Leduc", "Sylvan Lake", "Camrose", "Lethbridge", "Swan Hills", "Canmore", "McLennan", "Taber", "Didzbury", "Medicine Hat",
            "Turner Valley", "Drayton Valley", "Olds", "Vermillion", "Edmonton", "Onoway", "Wood Buffalo", "Ft. Saskatchewan", "Provost"],
        "BC":["Burnaby", "Lumby", "City of Port Moody", "Cache Creek", "Maple Ridge", "Prince George", "Castlegar", "Merritt", "Prince Rupert", "Chemainus", "Mission", "Richmond",
            "Chilliwack", "Nanaimo", "Saanich", "Clearwater", "Nelson", "Sooke", "Colwood", "New Westminster", "Sparwood", "Coquitlam", "North Cowichan", "Surrey", "Cranbrook",
            "North Vancouver", "Terrace", "Dawson Creek", "North Vancouver", "Tumbler", "Delta", "Osoyoos", "Vancouver", "Fernie", "Parksville", "Vancouver", "Invermere",
            "Peace River", "Vernon", "Kamloops", "Penticton", "Victoria", "Kaslo", "Port Alberni", "Whistler", "Langley", "Port Hardy"],
        "MB":["Birtle", "Flin Flon", "Swan River", "Brandon", "Snow Lake", "The Pas", "Cranberry Portage", "Steinbach", "Thompson", "Dauphin", "Stonewall", "Winnipeg"],
        "NB":["Cap-Pele", "Miramichi", "Saint John", "Fredericton", "Moncton", "Saint Stephen", "Grand Bay-Westfield", "Oromocto", "Shippagan", "Grand Falls", "Port Elgin",
            "Sussex", "Memramcook", "Sackville", "Tracadie-Sheila"], "NL":["Argentia", "Corner Brook", "Paradise", "Bishop\'s Falls", "Labrador City", "Portaux Basques", "Botwood",
            "Mount Pearl", "St. John\'s", "Brigus"], "NT":["Town of Hay River", "Town of Inuvik", "Yellowknife"], "NS":["Amherst", "Hants County", "Pictou", "Annapolis", "Inverness County",
            "Pictou County", "Argyle", "Kentville", "Queens", "Baddeck", "County of Kings", "Richmond", "Bridgewater", "Lunenburg", "Shelburne", "Cape Breton", "Lunenburg County",
            "Stellarton", "Chester", "Mahone Bay", "Truro", "Cumberland County", "New Glasgow", "Windsor", "East Hants", "New Minas", "Yarmouth", "Halifax", "Parrsboro"],
        "NU":["Iqaluit "], "ON":["Ajax", "Halton", "Peterborough", "Atikokan", "Halton Hills", "Pickering", "Barrie", "Hamilton", "Port Bruce", "Belleville", "Hamilton-Wentworth",
            "Port Burwell", "Blandford-Blenheim", "Hearst", "Port Colborne", "Blind River", "Huntsville", "Port Hope", "Brampton", "Ingersoll", "Prince Edward", "Brant",
            "James", "Quinte West", "Brantford", "Kanata", "Renfrew", "Brock", "Kincardine", "Richmond Hill", "Brockville", "King", "Sarnia", "Burlington", "Kingston",
            "Sault Ste. Marie", "Caledon", "Kirkland Lake", "Scarborough", "Cambridge", "Kitchener", "Scugog", "Chatham-Kent", "Larder Lake", "Souix Lookout CoC Sioux Lookout",
            "Chesterville", "Leamington", "Smiths Falls", "Clarington", "Lennox-Addington", "South-West Oxford", "Cobourg", "Lincoln", "St. Catharines", "Cochrane", "Lindsay",
            "St. Thomas", "Collingwood", "London", "Stoney Creek", "Cornwall", "Loyalist Township", "Stratford", "Cumberland", "Markham", "Sudbury", "Deep River", "Metro Toronto",
            "Temagami", "Dundas", "Merrickville", "Thorold", "Durham", "Milton", "Thunder Bay", "Dymond", "Nepean", "Tillsonburg", "Ear Falls", "Newmarket", "Timmins",
            "East Gwillimbury", "Niagara", "Toronto", "East Zorra-Tavistock", "Niagara Falls", "Uxbridge", "Elgin", "Niagara-on-the-Lake", "Vaughan", "Elliot Lake", "North Bay",
            "Wainfleet", "Flamborough", "North Dorchester", "Wasaga Beach", "Fort Erie", "North Dumfries", "Waterloo", "Fort Frances", "North York", "Waterloo", "Gananoque",
            "Norwich", "Welland", "Georgina", "Oakville", "Wellesley", "Glanbrook", "Orangeville", "West Carleton", "Gloucester", "Orillia", "West Lincoln", "Goulbourn", "Osgoode",
            "Whitby", "Gravenhurst", "Oshawa", "Wilmot", "Grimsby", "Ottawa", "Windsor", "Guelph", "Ottawa-Carleton", "Woolwich", "Haldimand-Norfork", "Owen Sound", "York"],
        "PE":["Alberton", "Montague", "Stratford", "Charlottetown", "Souris", "Summerside", "Cornwall"], "QC":["Alma", "Fleurimont", "Longueuil", "Amos", "Gaspe", "Marieville", "Anjou",
            "Gatineau", "Mount Royal", "Aylmer", "Hull", "Montreal", "Beauport", "Joliette", "Montreal Region", "Bromptonville", "Jonquiere", "Montreal-Est", "Brosssard",
            "Lachine", "Quebec", "Chateauguay", "Lasalle", "Saint-Leonard", "Chicoutimi", "Laurentides", "Sherbrooke", "Coaticook", "LaSalle", "Sorel", "Coaticook", "Laval",
            "Thetford Mines", "Dorval", "Lennoxville", "Victoriaville", "Drummondville", "Levis"], "SK":["Avonlea", "Melfort", "Swift Current", "Colonsay", "Nipawin", "Tisdale",
            "Craik", "Prince Albert", "Unity", "Creighton", "Regina", "Weyburn", "Eastend", "Saskatoon", "Wynyard", "Esterhazy", "Shell Lake", "Yorkton", "Gravelbourg"],
        "YT":["Carcross", "Whitehorse"]};

    let cityName = Array(records).fill(null);

    let provinceCode = ["AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON", "PE", "QC", "SK", "YT"];
    const headers = Object.keys(cities);
    provinceName = [];
    for (let i = 0; i < records; i++)
    {
        let province = parseInt((Math.random() * 11));
        let city = parseInt(Math.random() * cities[headers[province]].length);
        //this.provinceName[i] = province;
        cityName[i] = cities[headers[province]][city];
        provinceName.push(headers[province]);
    }

    return cityName;
}
function provinceCode() {

    return provinceName;
}
function postalCode() {
    let postalCode = ["M2N", "T8L", "J5R", "A1N", "K6V"];
    let code = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        this.index = parseInt((Math.random())) * 5;
        let num = (parseInt((Math.random() * (90 - 65)))) + 65;
        let randomChars = String.fromCharCode(num);
        code[i] = postalCode[this.index] + " " + (parseInt((Math.random() * 9))) + randomChars + (parseInt((Math.random() * 9)));
    }
    return code;
}
function flexibleSpendingAccount() {
    let flexibleSpendingAccountValues = ["M2N", "T8L", "J5R", "A1N", "K6V"];
    let flexibleSpendingAccount = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        this.index = parseInt((Math.random() * 5));
        flexibleSpendingAccount[i] = flexibleSpendingAccountValues[this.index];
    }
    return flexibleSpendingAccount;
}
function dwellingType() {
    let dwellingValues = ["Detached", "SemiDetached", "Townhouse", "Appartment", "Duplex", "Triplex", "Fourplex", "DuplexDetached", "DuplexSemiDetached", "RowHousing", "ApartmentLowRise", "ApartmentHighRise", "Mobile", "TriPlexDetached", "TriPlexSemiDetached", "Stacked", "ModularHomeDetached", "ModularHomeSemiDetached", "FourPlexDetached", "FourPlexSemiDetached"];
    let dwellingType = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        this.index = parseInt((Math.random() * 20));
        dwellingType[i] = dwellingValues[this.index];
    }
    return dwellingType;
}
function approvedLendingAreas() {
    let ApprovedLendingAreasValues = ["Medium", "Major"];
    let ApprovedLendingAreas = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        this.index = parseInt((Math.random() * 2));
        ApprovedLendingAreas[i] = ApprovedLendingAreasValues[this.index];
    }
    return ApprovedLendingAreas;
}
function loanAmount() {
    let loanAmount = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        let amount = parseInt((Math.random() * 10000000));
        loanAmount[i] = amount;
    }
    return loanAmount;
}
function policyException() {
    let policyException = Array(records).fill(null);
    let loanAmt = 0;
    for (let i = 0; i < records; i++)
    {
        loanAmt = parseInt(loanAmount[i]);
        if (loanAmt > 2500000)
        {
            policyException[i] = "Received";
        }
        else
        {
            policyException[i] = "Not Received";
        }
    }
    return policyException;
}
function loanToValue() {
    let loanToValue = Array(records).fill(null);
    let loanToValueValues = [80, 65, 75, 80, 65, 75, 60, 90, 95, 95.0];
    for (let i = 0; i < records; i++)
    {
        this.index = parseInt((Math.random() * 10));
        loanToValue[i] = loanToValueValues[this.index] / 100;
    }
    return loanToValue;
}
function downPaymentSource() {
    let paySource = ["SaleOfExistingProperty", "PersonalCash", "RRSP", "BorrowedAgainstLiquidAssets", "Gift", "SweatEquity", "Other", "ExistingEquity", "SecondaryFinancing", "Grants", "Borrowed", "Own Resources"];
    let downPayment = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        this.index = parseInt((Math.random() * 12));
        downPayment[i] = paySource[this.index];
    }
    return downPayment;
}
function creditScore() {
    let creditScore = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        this.index = parseInt((Math.random() * 751));
        creditScore[i] = this.index;
    }
    return creditScore;
}
function primaryApplicantInd() {
    let givenValues = ["Primary", "Not Primary"];
    // The array size is determined by the number of Records requested
    let primaryApplicantInd = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        let index = parseInt((Math.random() * (givenValues.length)));
        primaryApplicantInd[i] = givenValues[index];
    }
    return primaryApplicantInd;
}
function grossDebtService() {
    // array to be returned
    // the array size is determined by the number of Records requested
    let grossDebtService = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        grossDebtService[i] = (Math.random() * (60)) + "%";
    }
    return grossDebtService;
}
function totalDebtService() {
    // array to be returned
    // the array size is determined by the number of Records requested
    let totalDebtService = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        totalDebtService[i] = (Math.random() * (60)) + "%";
    }
    return totalDebtService;
}
function qualifiedIncomeInd() {
    let qualifiedIncome = ["Qualified", "Not Qualified"];
    let qualifiedIncomes = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        this.index = parseInt((Math.random() * 2));
        qualifiedIncomes[i] = qualifiedIncome[this.index];
    }
    return qualifiedIncomes;
}
function totalIncome() {
    let total = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        let amount = (parseInt((Math.random() * (Number.MAX_VALUE - 90000)))) + 90000;
        total[i] = amount;
    }
    return total;
}
function residencyType() {
    let resident = ["Primary", "Not Primary"];
    let residency = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        this.index = parseInt((Math.random() * 2));
        residency[i] = resident[this.index];
    }
    return residency;
}
function areaName() {
    let areas = ["GVA", "Victoria", "Abbotsford", "Mission", "Squamish", "Whistler", "Rest of British Columbia", "Calgary", "Edmonton", "Rest of Alberta", "Winnipeg", "Rest of Manitoba", "Greater Toronto Area", "Rest of Ontario", "Otherwise"];
    let area = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        this.index = parseInt((Math.random() * 14));
        area[i] = areas[this.index];
    }
    return area;
}
// Business requirement not clear so purchase price is capped at 10 Million
function purchasePrice() {
    let purchasePrice = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        purchasePrice[i] = Math.random() * 10000000;
    }
    return purchasePrice;
}
// Business requirement not clear so paying off debt capped to 50 years
function amortazationTermsInYears() {
    let amortazationTermsInYears = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        amortazationTermsInYears[i] = (Math.random() * 50);
    }
    return amortazationTermsInYears;
}
function previouslyInsure() {
    let insure = ["Previously Insured", "Not Previously Insured"];
    let insurance = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        if (transaction[i] === "Transfer" && product[i] === "Prime")
        {
            insurance[i] = "Previously Insured";
        }
        else
        {
            insurance[i] = "Not Previously Insured";
        }
    }
    return insurance;
}
function propertyOwnershipType() {
    let OwnershipType = ["Condominium", "Freehold"];
    let OwnershipTypes = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        this.index = parseInt((Math.random() * 2));
        OwnershipTypes[i] = OwnershipType[this.index];
    }
    return OwnershipTypes;
}
function baseAmount() {
    let baseAmount = Array(records).fill(null);
    for (let i = 0; i < records; i++)
    {
        baseAmount[i] = (Math.random() * 925000) + 50000;
    }
    return baseAmount;
}
const csvmaker = function (data) {

    // Empty array for storing the values
    csvRows = [];

    // Headers is basically a keys of an
    // object which is id, name, and
    // profession

    const headers = Object.keys(data);
    csvRows.push(headers.join(','));

    for (let i = 0; i < records; i++) {
        const csvString = [];
        for (let j = 0; j < headers.length; j++) {
            csvString.push(data[headers[j]][i]);
        }
        csvRows.push(csvString.toString());
    }


    // As for making csv format, headers
    // must be separated by comma and
    // pushing it into array


    // Pushing Object values into array
    // with comma separation
    //const values = Object.values(data).join(',');
    //csvRows.push(values)

    // Returning the array joining with new line
    return csvRows.join('\n')
}