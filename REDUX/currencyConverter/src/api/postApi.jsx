import axios from "axios";
//https://www.bayt.com/en/saudi-arabia/jobs/software-engineer-5252703/?utm_source=subscription&utm_medium=email&utm_campaign=j_job_alerts_channels&utm_content=en_new&email_name=j_job_alerts_channels&user_visit_token=qZwtCDG1E1mMPLKPldOuIUbpkLIJQhRM4hxwV%2Bk1HChuTZB2j16gpMsrDxDwe0zlIlmjnHqN22H2QfQN6%2FfHEU1p0%2BLFgzk2BtlyHmWkG303yLT15G0sJMtZgBlxPXSP9xWapZ7XVl3P7QR3gHNccw%3D%3D

const api = axios.create({
    baseURL: "https://www.bayt.com/en/saudi-arabia/jobs/software-engineer-5252703/?utm_source=subscription&utm_medium=email&utm_campaign=j_job_alerts_channels&utm_content=en_new&email_name=j_job_alerts_channels&user_visit_token=qZwtCDG1E1mMPLKPldOuIUbpkLIJQhRM4hxwV%2Bk1HChuTZB2j16gpMsrDxDwe0zlIlmjnHqN22H2QfQN6%2FfHEU1p0%2BLFgzk2BtlyHmWkG303yLT15G0sJMtZgBlxPXSP9xWapZ7XVl3P7QR3gHNccw%3D%3D",
});

export const currencyConvertor = (fromCurrency, toCurrency, amount) => {
    return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};

