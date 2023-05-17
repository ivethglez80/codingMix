function openOrSenior(data){
    let membership = [];
    for (let i=0; i<data.length;i++){
      if (data[i][0]>=55 && data[i][1]>7){
        membership.push("Senior");
      }else{
        membership.push("Open");
      }
    }
    return membership;
  }


/*
  otra forma de solucionarlo:

  function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

*/
/************************************************************************** */
/* una mas

function openOrSenior(data){
  function determineMembership(member){
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}

*/


