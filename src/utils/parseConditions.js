export const parseConditions = conditions => {
    const properties = conditions.split('\n');

    const minimumAge = properties[0];
    const driversLicense = properties[1];
    const paymentRequirements = properties[2];

    return { minimumAge, driversLicense, paymentRequirements };
};
