import * as mongoose from "mongoose";
import * as config from "config";

export class MongoDB {
	public async connect() {
		const connectionString = config.get<string>("DB.CONNECTION_STRING");
		console.log(connectionString);
		await mongoose.connect(connectionString, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});
	}
}
