const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-23.0994029",
    lng: "-45.7152317",
    name: "Lar dos meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "993713253",
    images: [
      "https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",

      "https://images.unsplash.com/photo-1578885111644-fb15f75630fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "1",
  });

  // consultar dados da tabela
 // const selectedOrphanages = await db.all("SELECT * FROM orphanages");
 // console.log(selectedOrphanages);

  // consultar somente 1 orphanato, pelo id
 // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
//  console.log(orphanage);

  // deletar dado da tabela
  //   console.log(await db.run("DELETE FROM orphanages WHERE id ='4'"))
  //  console.log(await db.run("DELETE FROM orphanages WHERE id ='5'"))
});
