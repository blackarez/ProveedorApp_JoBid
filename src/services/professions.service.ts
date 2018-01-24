import { Injectable } from "@angular/core";
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProfessionsService {
	professions = [
		{ name: 'Care', class: 'red' },
		{ name: 'Cleaning', class: 'yellow' },
		{ name: 'Janitorial', class: 'orange' },
		{ name: 'Transportation', class: 'green' },
		{ name: 'Food & Beverage', class: 'purple' },
		{ name: 'Legal services', class: 'blue' },
		{ name: 'Beauty', class: 'pink' }
	];
	dataCategoria: any = [];

	public getProfessions() {
		return this.professions;
	}

	public getCategoryByProfession(nameService = "") {
		//console.log(nameService);
		switch (nameService) {
			case "Care": {
				this.dataCategoria = ["Child care/Nany", "Senior care", "Family assistance", "Dog walker", "Personal shopper"];
				break;
			}
			case "Cleaning": {
				this.dataCategoria = ["Maids", "Car washers", "Pressure cleaning", "Carpet & upholstery cleaning"];
				break;
			}
			case "Janitorial": {
				this.dataCategoria = ["Handyman", "Plumbing", "Electrician", "Pool Cleaner", "Luck smith"];
				break;
			}
			case "Transportation": {
				this.dataCategoria = ["Day VIP chauffeur", "Taxi", "Car pool", "Moving services", "Delivery"];
				break;
			}
			case "Food & Beverage": {
				this.dataCategoria = ["Bartenders", "Waitress", "Chef", "Runners", "Valet parking", "Hostess"];
				break;
			}
			case "Legal services": {
				this.dataCategoria = ["Notary"];
				break;
			}
			case "Beauty": {
				this.dataCategoria = ["Personal trainer", "Haircut and DIY", "Manicure and pedicure", "Makeup", "Massage"];
				break;
			}
			default: {
				console.log("Invalid choice");
				break;
			}
		}
		return this.dataCategoria;
	}


}