function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6NBw3AI4pBu":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer0;
var Total = player.GetVar("Total");
Total = player.GetVar("na1")+player.GetVar("na2")+player.GetVar("na3")+player.GetVar("na4")+player.GetVar("na5")+player.GetVar("nb1")+player.GetVar("nb2")+player.GetVar("nb3")+player.GetVar("nb4")+player.GetVar("nb5")+player.GetVar("ta1")+player.GetVar("ta2")+player.GetVar("ta3")+player.GetVar("ta4")+player.GetVar("ta5")+player.GetVar("tb1")+player.GetVar("tb2")+player.GetVar("tb3")+player.GetVar("tb4")+player.GetVar("tb5");

player.SetVar("Total", Total);
}

