import ServiceObjectSchema = require("./Core/ServiceObjects/Schemas/ServiceObjectSchema");
import AppointmentSchema = require("./Core/ServiceObjects/Schemas/AppointmentSchema");

/**
 * BootStraper code. to initializes some class to avoid circular reference. 
 */

ServiceObjectSchema.AppointmentSchema = AppointmentSchema.Instance;

//export = ServiceObjectSchema;