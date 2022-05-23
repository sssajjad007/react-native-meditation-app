import React, { useMemo } from "react";
import { Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Tap } from "../Tap";
import { IIconProps } from "./types";
const Pause = require("./Pause.png");
const Play = require("./Play.png");
const Backward = require("./Backward.png");
const Forward = require("./Forward.png");
const Repeat = require("./Repeat.png");
const Shufle = require("./Shufle.png");
const ArrowRight = require("./ArrowRight.png");
const Setting = require("./Setting.png");
const Like = require("./like.png");
const Clock = require("./clock.png");
const Headphon = require("./hedphon.png");
const Meditation = require("./meditation.png");
const User = require("./3User.png");
const ArrowLeft = require("./ArrowLeft.png");
const Chat = require("./Chat.png");
const Close = require("./Close.png");
const CloseLight = require("./CloseLight.png");
const Edit = require("./Edit.png");
const Exit = require("./Exit.png");
const HomeBold = require("./HomeBold.png");
const HomeLight = require("./HomeLight.png");
const LearnBold = require("./LearnBold.png");
const LearnLight = require("./LearnLight.png");
const LikeBold = require("./LikeBold.png");
const MusicBold = require("./MusicBold.png");
const MusicLight = require("./MusicLight.png");
const Notification = require("./Notification.png");
const PlayIcon = require("./PlayIcon.png");
const Profile = require("./Profile.png");
const Lock = require("./Lock.png");
const UnLike = require("./UnLike.png");
const Check = require("./Check.png");
const MeditationBold = require("./MeditationBold.png");
const Shop = require("./Shop.png");
const Logo = require("./Logo.png");
const ShufFleBold = require("./ShuffleBold.png");
const RepeatBold = require("./RepeatBold.png");
const FavBold = require("./FavBold.png");
const Buy = require("./Buy.png");
const ShopBold = require("./ShopBold.png");
const HomeShop = require("./HomeShop.png");
const Plus = require("./Plus.png");
const Share = require("./Share.png");
const BoldExclamation = require("./BoldExclamation.png");
export function BoldExclamationIcon(props: IIconProps) {
  const { size, onPress } = props;
  const BoldExclamationMemo = useMemo(() => {
    return (
      <Image
        source={BoldExclamation}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return BoldExclamationMemo;
}
export function PlusIcon(props: IIconProps) {
  const { size, onPress } = props;
  const PlusMemo = useMemo(() => {
    return (
      <Image
        source={Plus}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return PlusMemo;
}
export function ShareIcon(props: IIconProps) {
  const { size, onPress } = props;
  const ShareMemo = useMemo(() => {
    return (
      <Image
        source={Share}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return ShareMemo;
}
export function HomeShopIcon(props: IIconProps) {
  const { size, onPress } = props;
  const HomeShopMemo = useMemo(() => {
    return (
      <Tap onPress={onPress}>
        <Image
          source={HomeShop}
          style={{ width: size, height: size }}
          resizeMode={"contain"}
        />
      </Tap>
    );
  }, [size]);
  return HomeShopMemo;
}
export function BuyIcon(props: IIconProps) {
  const { size, onPress } = props;
  const BuyMemo = useMemo(() => {
    return (
      <Image
        source={Buy}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return BuyMemo;
}
export function FavBoldIcon(props: IIconProps) {
  const { size, onPress } = props;
  const FavBoldMemo = useMemo(() => {
    return (
      <Image
        source={FavBold}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return <Tap onPress={onPress}>{FavBoldMemo}</Tap>;
}
export function ShopBoldIcon(props: IIconProps) {
  const { size, onPress } = props;
  const ShopBoldMemo = useMemo(() => {
    return (
      <Image
        source={ShopBold}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return <Tap onPress={onPress}>{ShopBoldMemo}</Tap>;
}
export function ShufFleBoldIcon(props: IIconProps) {
  const { size, onPress } = props;
  const ShufFleBoldMemo = useMemo(() => {
    return (
      <Image
        source={ShufFleBold}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return <Tap onPress={onPress}>{ShufFleBoldMemo}</Tap>;
}
export function RepeatBoldIcon(props: IIconProps) {
  const { size, onPress } = props;
  const RepeatBoldMemo = useMemo(() => {
    return (
      <Image
        source={RepeatBold}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);

  return <Tap onPress={onPress}>{RepeatBoldMemo}</Tap>;
}
export function LogoIcon(props: IIconProps) {
  const { size, onPress } = props;
  const LogoMemo = useMemo(() => {
    return (
      <Image
        source={Logo}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return LogoMemo;
}
export function ShopIcon(props: IIconProps) {
  const { size, onPress } = props;
  const ShopMemo = useMemo(() => {
    return (
      <Image
        source={Shop}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return ShopMemo;
}
export function MeditationBoldIcon(props: IIconProps) {
  const { size, onPress } = props;
  const MeditationBoldMemo = useMemo(() => {
    return (
      <Image
        source={MeditationBold}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return MeditationBoldMemo;
}
export function LockIcon(props: IIconProps) {
  const { size, onPress } = props;
  const LockMemo = useMemo(() => {
    return (
      <Image
        source={Lock}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);

  return LockMemo;
}
export function CheckIcon(props: IIconProps) {
  const { size, onPress } = props;
  const CheckMemo = useMemo(() => {
    return (
      <Image
        source={Check}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return <Tap onPress={onPress}>{CheckMemo}</Tap>;
}
export function LearnLightIcon(props: IIconProps) {
  const { size, onPress } = props;
  const LearnLightMemo = useMemo(() => {
    return (
      <Image
        source={LearnLight}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return LearnLightMemo;
}
export function LikeBoldIcon(props: IIconProps) {
  const { size, onPress } = props;
  const LikeBoldMemo = useMemo(() => {
    return (
      <Image
        source={LikeBold}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return <Tap onPress={onPress}>{LikeBoldMemo}</Tap>;
}
export function MusicBoldIcon(props: IIconProps) {
  const { size, onPress } = props;
  const MusicBoldMemo = useMemo(() => {
    return (
      <Image
        source={MusicBold}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return MusicBoldMemo;
}
export function MusicLightIcon(props: IIconProps) {
  const { size, onPress } = props;
  const MusicLightMemo = useMemo(() => {
    return (
      <Image
        source={MusicLight}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return MusicLightMemo;
}
export function NotificationIcon(props: IIconProps) {
  const { size, onPress } = props;
  const NotificationMemo = useMemo(() => {
    return (
      <Image
        source={Notification}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return <Tap onPress={onPress}>{NotificationMemo}</Tap>;
}
export function PlayIconIcon(props: IIconProps) {
  const { size, onPress } = props;
  const PlayIconMemo = useMemo(() => {
    return (
      <Image
        source={PlayIcon}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
        fadeDuration={0}
      />
    );
  }, [size]);
  return PlayIconMemo;
}
export function ProfileIcon(props: IIconProps) {
  const { size, onPress } = props;
  const ProfileMemo = useMemo(() => {
    return (
      <Image
        source={Profile}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return <Tap onPress={onPress}>{ProfileMemo}</Tap>;
}
export function UnLikeIcon(props: IIconProps) {
  const { size, onPress } = props;
  const UnLikeMemo = useMemo(() => {
    return (
      <Image
        source={UnLike}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return <Tap onPress={onPress}>{UnLikeMemo}</Tap>;
}
export function HeadphonIcon(props: IIconProps) {
  // FIXME: HeadPhone
  const { size, onPress, name } = props;
  const HeadPhoneMemo = useMemo(() => {
    return (
      <Image
        source={Headphon}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return HeadPhoneMemo;
}
export function MeditationIcon(props: IIconProps) {
  const { size, onPress, name } = props;
  const MeditationMemo = useMemo(() => {
    return (
      <Image
        source={Meditation}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    );
  }, [size]);
  return MeditationMemo;
}
export function PauseIcon(props: IIconProps) {
  const { size, onPress, name } = props;
  return (
    <Tap onPress={onPress}>
      {name === "Pause" ? (
        <Image
          source={Pause}
          style={{ width: size, height: size }}
          resizeMode={"contain"}
          // fadeDuration={0}
        />
      ) : (
        <Image
          source={Play}
          style={{ width: size, height: size }}
          resizeMode={"contain"}
          // fadeDuration={0}
        />
      )}
    </Tap>
  );
}
export function LikeIcon(props: IIconProps) {
  const { size, onPress, name } = props;
  return (
    <Tap onPress={onPress}>
      <Image
        source={Like}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    </Tap>
  );
}
export function ClockIcon(props: IIconProps) {
  const { size, onPress, name } = props;
  return (
    <Tap onPress={onPress}>
      <Image
        source={Clock}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    </Tap>
  );
}
export function BackwardIcon(props: IIconProps) {
  const { size, onPress } = props;
  return (
    <Tap onPress={onPress}>
      <Image
        source={Backward}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    </Tap>
  );
}
export function SettingIcon(props: IIconProps) {
  const { size, onPress } = props;
  return (
    <Tap onPress={onPress}>
      <Image
        source={Setting}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    </Tap>
  );
}
export function ArrowRightIcon(props: IIconProps) {
  const { size, onPress } = props;
  return (
    <Image
      source={ArrowRight}
      style={{ width: size, height: size }}
      resizeMode={"contain"}
    />
  );
}
export function ForwardIcon(props: IIconProps) {
  const { size, onPress } = props;
  return (
    <Tap onPress={onPress}>
      <Image
        source={Forward}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    </Tap>
  );
}
export function RepeatIcon(props: IIconProps) {
  const { size, onPress } = props;
  return (
    <Tap onPress={onPress}>
      <Image
        source={Repeat}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    </Tap>
  );
}
export function UserIcon(props: IIconProps) {
  const { size, onPress } = props;
  return (
    <Tap onPress={onPress}>
      <Image
        source={User}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    </Tap>
  );
}
export function ArrowLeftIcon(props: IIconProps) {
  const { size, onPress } = props;
  return (
    <Tap onPress={onPress}>
      <Image
        source={ArrowLeft}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    </Tap>
  );
}

export function ChatIcon(props: IIconProps) {
  const { size, onPress } = props;
  return (
    <Tap onPress={onPress}>
      <Image
        source={Chat}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    </Tap>
  );
}

export function CloseIcon(props: IIconProps) {
  const { size, onPress } = props;
  return (
    <Tap onPress={onPress}>
      <Image
        source={Close}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    </Tap>
  );
}

export function CloseLightIcon(props: IIconProps) {
  const { size, onPress } = props;
  return (
    <BorderlessButton onPress={onPress} borderless>
      <Image
        source={CloseLight}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    </BorderlessButton>
  );
}

export function ExitIcon(props: IIconProps) {
  const { size, onPress } = props;
  return (
    <Tap onPress={onPress}>
      <Image
        source={Exit}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    </Tap>
  );
}

export function EditIcon(props: IIconProps) {
  const { size, onPress } = props;
  return (
    <Tap onPress={onPress}>
      <Image
        source={Edit}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    </Tap>
  );
}

export function HomeBoldIcon(props: IIconProps) {
  const { size, onPress } = props;
  return (
    <Tap onPress={onPress}>
      <Image
        source={HomeBold}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    </Tap>
  );
}

export function LearnBoldIcon(props: IIconProps) {
  const { size, onPress } = props;
  return (
    <Tap onPress={onPress}>
      <Image
        source={LearnBold}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    </Tap>
  );
}

export function HomeLightIcon(props: IIconProps) {
  const { size, onPress } = props;
  return (
    // <Tap onPress={onPress}>
    <Image
      source={HomeLight}
      style={{ width: size, height: size }}
      resizeMode={"contain"}
    />
    // </Tap>
  );
}

export function ShufleIcon(props: IIconProps) {
  const { size, onPress } = props;
  return (
    <Tap onPress={onPress}>
      <Image
        source={Shufle}
        style={{ width: size, height: size }}
        resizeMode={"contain"}
      />
    </Tap>
  );
}
