// Local details for the main service areas. Hospital names are listed for reference only.
export type AreaContent = { intro: string; hospitals: string[]; access: string; faqs: { q: string; a: string }[] };

export const areaContent: Record<string, AreaContent> = {
  churchgate: {
    intro: "Churchgate sits at the southern end of the Western line, with heritage apartment buildings along Marine Drive and around the Oval Maidan. Families here often look after elderly parents in older buildings, where a visit from a doctor or nurse at home avoids a tiring trip across the city.",
    hospitals: ["Bombay Hospital, Marine Lines", "Saifee Hospital, Charni Road", "Jaslok Hospital, Peddar Road"],
    access: "Many buildings near Churchgate and Marine Drive are older and may have small lifts or none. When you contact us, mention the building name, the floor and whether a lift is available, so the visit is planned properly.",
    faqs: [{ q: "What should I tell you about my building in Churchgate?", a: "Share the building name, the floor, whether there is a lift and a contact number for the watchman or society office. This helps us plan the visit and avoid delays at the entrance." }],
  },
  "andheri-west": {
    intro: "Andheri West is one of Mumbai’s largest residential areas, with housing societies across Four Bungalows, Seven Bungalows, Yari Road, DN Nagar, Amboli and Oshiwara. Heavy traffic on Link Road and SV Road makes a visit from a doctor or nurse at home far easier than a trip to a clinic, especially for older adults.",
    hospitals: ["Kokilaben Dhirubhai Ambani Hospital, Four Bungalows", "Cooper Hospital, JVPD Scheme"],
    access: "Most buildings here have security gates. Share your society name, wing, flat number and a landmark such as Infinity Mall or Andheri Sports Complex, and ask the watchman to expect the visit.",
    faqs: [{ q: "Do you visit all parts of Andheri West?", a: "We serve Andheri West, including Four Bungalows, Seven Bungalows, Yari Road, DN Nagar, Amboli and Oshiwara. Tell us your exact address when you contact us and we will confirm the visit." }],
  },
  "lokhandwala-complex": {
    intro: "Lokhandwala Complex in Andheri West is made up of large gated complexes and towers around Lokhandwala Market and the Back Road. Scheduled doctor visits, dressings and nursing at home suit families here, especially senior residents who prefer not to travel.",
    hospitals: ["Kokilaben Dhirubhai Ambani Hospital, Four Bungalows", "Cooper Hospital, JVPD Scheme"],
    access: "Lokhandwala complexes often have several wings and entry checks. Please share the complex name, wing, flat number and a contact number for the gate.",
    faqs: [{ q: "Do you visit gated complexes in Lokhandwala?", a: "Yes. Share the complex and wing name, your flat number and a gate contact in advance, so entry is quick on the day." }],
  },
  juhu: {
    intro: "Juhu has beachfront apartments, society flats and bungalow lanes around Juhu Tara Road and the JVPD Scheme. Residents who prefer private, unhurried care often choose a doctor or nurse at home rather than a clinic visit.",
    hospitals: ["Cooper Hospital, JVPD Scheme", "Nanavati Hospital, Vile Parle West"],
    access: "Some lanes in Juhu are narrow and some bungalows have separate entrances. A clear address, the nearest landmark and a contact number help the visiting professional find you without delay.",
    faqs: [{ q: "Can you visit bungalows and sea-facing apartments in Juhu?", a: "Yes. We visit homes across Juhu, including society flats and bungalows. Share the full address and a landmark when you book." }],
  },
  "vile-parle-west": {
    intro: "Vile Parle West is a well-established residential area around Mithibai College, Juhu Road and SV Road, close to Nanavati Hospital. After a hospital stay, patients here often need dressings, injections or follow-up at home, and our team can continue that care.",
    hospitals: ["Nanavati Hospital, SV Road", "Cooper Hospital, JVPD Scheme"],
    access: "Older societies are common here. Mention your floor and whether the building has a lift, along with the society name and a landmark such as Mithibai College.",
    faqs: [{ q: "Can you continue care at home after discharge from a hospital near Vile Parle?", a: "Yes. Keep the discharge summary and prescriptions ready for the visit. We can continue prescribed dressings and injections and follow-up care at home, and the doctor will tell you when a hospital review is needed." }],
  },
  "santacruz-west": {
    intro: "Santacruz West lies between Vile Parle and Khar, with residential societies around Santacruz Station, Milan Subway and Juhu Tara Road. Families here can arrange a doctor or nursing visit at home instead of travelling in the traffic around the station and the subway.",
    hospitals: ["Nanavati Hospital, Vile Parle West", "Lilavati Hospital, Bandra West"],
    access: "Roads near Milan Subway and the station get congested, especially in the rains. Please give your exact address and the nearest landmark so the visit can be planned around traffic.",
    faqs: [{ q: "Do you cover the area around Milan Subway?", a: "Yes. Tell us your address and a nearby landmark and we will confirm the visit." }],
  },
  "bandra-west": {
    intro: "Bandra West is dense with apartment towers and older buildings around Carter Road, Linking Road, Pali Hill and Bandstand. A doctor or nurse at home helps families who want unhurried care without looking for parking or waiting at a clinic.",
    hospitals: ["Lilavati Hospital, Bandra Reclamation", "Holy Family Hospital, Hill Road", "P. D. Hinduja Hospital, Mahim"],
    access: "Parking is limited in many Bandra West lanes. Share the building name, the floor, any gate or lift details and a nearby landmark such as Carter Road or Linking Road.",
    faqs: [{ q: "Which parts of Bandra West do you visit?", a: "We visit homes across Bandra West, including the Carter Road, Linking Road, Pali Hill and Bandstand areas. Share your address and we will confirm the visit." }],
  },
  "goregaon-west": {
    intro: "Goregaon West has a large residential population around Goregaon Station, Link Road, Bangur Nagar and Ram Mandir. Home visits help families who find the busy station area and Link Road traffic difficult, especially when a parent is unwell or recovering.",
    hospitals: ["Kokilaben Dhirubhai Ambani Hospital, Four Bungalows", "Cooper Hospital, JVPD Scheme"],
    access: "Many housing societies in Bangur Nagar and near Ram Mandir have security gates. Share the society name, wing and flat number, and a gate contact.",
    faqs: [{ q: "Do you visit Bangur Nagar and Ram Mandir?", a: "Yes. These are part of our Goregaon West service area. Tell us your address and the care needed." }],
  },
  "malad-west": {
    intro: "Malad West stretches from the station area along Link Road to Mith Chowky, Orlem and Evershine Nagar, with many housing societies and towers. Care at home saves long, crowded journeys to clinics for older parents and for patients recovering after treatment.",
    hospitals: ["Dr. Babasaheb Ambedkar (Shatabdi) Hospital, Kandivali West", "Kokilaben Dhirubhai Ambani Hospital, Four Bungalows"],
    access: "Give your society, wing and flat number, and ask the watchman to expect the visit. A landmark such as Inorbit Mall or Malad Station helps.",
    faqs: [{ q: "Which parts of Malad West do you cover?", a: "We serve Malad West, including the areas around the station, Link Road, Orlem and Mith Chowky. Share your address and we will confirm the visit." }],
  },
  "kandivali-west": {
    intro: "Kandivali West has dense residential pockets around Mahavir Nagar, Charkop and the station area. Families can arrange a doctor or nurse at home rather than travelling in peak-hour traffic with an unwell parent.",
    hospitals: ["Dr. Babasaheb Ambedkar (Shatabdi) Hospital, Kandivali West", "Kokilaben Dhirubhai Ambani Hospital, Four Bungalows"],
    access: "Share your society name, wing and flat number, a landmark near Mahavir Nagar, Charkop or the station, and a contact number for the gate.",
    faqs: [{ q: "Do you visit Charkop and Mahavir Nagar?", a: "Yes. These are part of our Kandivali West service area. Share your address and we will confirm the visit." }],
  },
  "borivali-west": {
    intro: "Borivali West is a large residential suburb around the station and IC Colony. Home visits suit families who want a doctor or nurse for an older parent or for a patient who finds the busy station area difficult to travel through.",
    hospitals: ["Dr. Babasaheb Ambedkar (Shatabdi) Hospital, Kandivali West"],
    access: "Give the society name, wing and flat number and a landmark such as Borivali Station or IC Colony, and keep a number ready for the gate.",
    faqs: [{ q: "Do you visit IC Colony?", a: "Yes. We serve Borivali West, including IC Colony. Share your address and the care needed and we will confirm the visit." }],
  },
  "jogeshwari-west": {
    intro: "Jogeshwari West sits between Andheri and Goregaon, with housing societies along SV Road and near Jogeshwari Station. Home visits help seniors and bedridden patients here avoid the traffic and crowds around the station.",
    hospitals: ["Cooper Hospital, JVPD Scheme", "Kokilaben Dhirubhai Ambani Hospital, Four Bungalows"],
    access: "Roads near the station and SV Road are crowded at peak hours. Share the society name, wing, flat number and a landmark, and the visit can be planned around traffic.",
    faqs: [{ q: "Do you visit areas along SV Road in Jogeshwari West?", a: "Yes. Share your address and we will confirm the visit." }],
  },
};
