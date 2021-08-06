const doc = document

// Fetching NUI
const fetchNUI = async (cbname, data) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    };
    const resp = await fetch(`https://ev-tpmenu-ui/${cbname}`, options);
    return await resp.json();
}