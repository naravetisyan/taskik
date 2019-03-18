import axios from "axios";

export function getGroupId() {
    return axios.get(`https://avetiq-test.firebaseapp.com/group/narek_avetisyan`);
}

export function getUserId() {
    return axios.get(`https://avetiq-test.firebaseapp.com/user/narek_avetisyan`);
}

export function getlistArr(groupId, userId) {
    return axios.get(`https://avetiq-test.firebaseapp.com/proscons/group/${groupId}/user/${userId}`);
}

export function editListArr(groupId, userId, data) {
    return axios.put(
        `https://avetiq-test.firebaseapp.com/proscons/group/${groupId}/user/${userId}`, 
        data, 
        { headers: { "Content-Type": "application/json" }}
    );
}


