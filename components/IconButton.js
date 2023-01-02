import { Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function IconButton({icon, iconColor, onPress}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
      <Ionicons name={icon} size={20} color={iconColor} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.8,
  }
});