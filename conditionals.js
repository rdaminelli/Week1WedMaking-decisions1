let jonSnowHealth = 100;
let jamieLannisterAttack = 35;

for(let i = 0; i < 5; i++)
{
    jonSnowHealth -= jamieLannisterAttack;
    if(jonSnowHealth <= 0)
    {
        console.log(`Jon Snow has died after Attack #${i + 1}`);
        break;
    }
    else
    {
        console.log(`Jon Snow's Health: ${jonSnowHealth}`);
    }
}
