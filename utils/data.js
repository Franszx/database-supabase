// ------------------ get ------------------------//
const myApiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtZ3VxYmZiYnNvbXZ1eWp3eXF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTE1MjQsImV4cCI6MjAxMjQyNzUyNH0.eVoOYQtfZhETI-5MreImup6YjDCbUvs1VGgqDHkrtXQ";

export async function getPets() {
  let headersList = {
    apikey: myApiKey,
    Accept: "application/json",
  };

  let response = await fetch("https://wmguqbfbbsomvuyjwyqt.supabase.co/rest/v1/Pets?=", {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();
  return data;
}
// ----------------- post ---------------------- //
export async function addPet() {
  let headersList = {
    apikey: myApiKey,
    prefer: "return=representation",
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  let bodyContent = JSON.stringify({
    name: "polly",
    species: "horse",
    isAlive: true,
    traits: ["sleep", "run"],
    race: "stallion",
    dob: "2000-12-21",
    activityLevel: 30,
    image: "horsePolly.webp",
  });

  let response = await fetch("https://wmguqbfbbsomvuyjwyqt.supabase.co/rest/v1/Pets?=", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  return data;
}
// --------------------- patch ------------------------ //
export async function updatePet(id) {
  let headersList = {
    apikey: myApiKey,
    Prefer: "return = representation",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    isAlive: false,
    activityLevel: 31,
  });

  let response = await fetch("https://wmguqbfbbsomvuyjwyqt.supabase.co/rest/v1/Pets?id=eq." + id, {
    method: "PATCH",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  return data;
}
// ------------------------ delete ------------------------ //
export async function deletePet(id) {
  console.log("sletter nu", id);
  let headersList = {
    apikey: myApiKey,
    Prefer: "return = representation",
    Accept: "application/json",
  };

  let response = await fetch("https://wmguqbfbbsomvuyjwyqt.supabase.co/rest/v1/Pets?id=eq." + id, {
    method: "DELETE",
    headers: headersList,
  });

  let data = await response.json();
  return data;
}
