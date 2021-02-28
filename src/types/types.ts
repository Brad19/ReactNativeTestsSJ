export type ProfileProps = {
    address: {
        formattedAddress: string;
        zoneId: string;
    },
    email: string;
    firstName: string;
    lastName: string;
    maxJobDistance: string;
    phoneNumber: string;
    workerId: string
}

export type MatchingJobsProps = {
    jobId: string;
    jobTitle: {
        name: string;
        imageUrl: string;
    },
    company: {
        name: string;
        address: {
            formattedAddress: string;
            zoneId: string;
        },
        reportTo: {
            name: string;
            phone: string;
        },
    },
    milesToTravel: string;
    wagePerHourInCents: string;
    shifts: [
        {
            startDate: string;
            endDate: string;
        }
    ],
    branch: string;
    branchPhoneNumber: string;

};