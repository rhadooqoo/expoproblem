import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

import NavigationCard from "../components/NavigationCard";
import SliderEvents from "../components/SliderEvents";

import flashSecvential from "../assets/images/flash_secvential-ezgif.com-crop.gif";
import restaurant from "../assets/images/restaurant.png";
import menuImg from "../assets/images/meniurile_zilei.webp";

import { useDispatch } from "react-redux";
import { loadUser } from "./(redux)/authSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  console.log("ce se intampla?");

  return (
    <View className="flex flex-col bg-[#494949] w-full h-screen overflow-hidden">
      <LinearGradient
        colors={["rgba(128,128,128,1)", "transparent"]}
        className="absolute left-0 right-0 top-0 h-[100%]"
      />
      <ScrollView>
        <View className="flex flex-col gap-6 pb-12">
          <View className="flex flex-col pt-28">
            <View className="flex flex-row justify-around w-full">
              {navigationCardsTop.map(({ img, text, link }) => (
                <NavigationCard key={img} img={img} text={text} link={link} />
              ))}
            </View>
          </View>
          <View className="flex flex-col items-center w-auto gap-y-3">
            <Text className="text-[#d1ba6b] font-semibold text-3xl">
              Meniurile Zilei
            </Text>
            <Link asChild href="/fast-delivery">
              <TouchableHighlight className="flex self-center border-[3px] border-[#d1ba6b] rounded-3xl overflow-hidden w-[95vw] h-[180px]">
                <Image
                  source={menuImg}
                  className="flex self-center w-full h-full"
                />
              </TouchableHighlight>
            </Link>
            <View className="flex flex-col items-center w-auto gap-y-3">
              <Text className="text-[#d1ba6b] font-semibold text-3xl pb-3">
                Galla Events
              </Text>
              <SliderEvents />
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#000000" style="light" />
    </View>
  );
};

export default App;

const navigationCardsTop = [
  {
    img: flashSecvential,
    text: "Shopping",
    link: "/restaurants",
    transparent: true,
  },
  {
    img: restaurant,
    text: "Restaurante",
    link: "/restaurants",
    transparent: true,
  },
];
