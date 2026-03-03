import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Appointment {
    id: bigint;
    name: string;
    message?: string;
    preferredDate: bigint;
    timestamp: Time;
    department: string;
    phoneNumber: string;
}
export type Time = bigint;
export interface AppointmentInput {
    name: string;
    message?: string;
    preferredDate: bigint;
    department: string;
    phoneNumber: string;
}
export interface backendInterface {
    bookAppointment(input: AppointmentInput): Promise<bigint>;
    getAllAppointments(): Promise<Array<Appointment>>;
    getAppointmentById(id: bigint): Promise<Appointment>;
}
