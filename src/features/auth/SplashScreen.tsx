import { Image, Platform, StatusBar, View } from 'react-native'
import React, { FC, useEffect } from 'react'
import { useStyles } from 'react-native-unistyles'
import { loginStyles, splashStyles } from '@unistyles/authStyles'
import Animated, { FadeInDown } from 'react-native-reanimated'
import CustomText from '@components/global/CustomText'
import { resetAndNavigate } from '@utils/NavigationUtils'

const SplashScreen: FC = () => {

    const { styles } = useStyles(splashStyles)

    useEffect(() => {
        const timeoutUd = setTimeout(() => {
            resetAndNavigate('LoginScreen')
        }, 3000)

        return () => clearTimeout(timeoutUd)
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar hidden={Platform.OS !== 'android'} />
            <Image
                source={require('@assets/images/logo_t.png')}
                style={styles.logoImage}
            />

            <Animated.View
                style={styles.animatedContainer}
                entering={FadeInDown.delay(400).duration(800)}>

                <Image
                    source={require('@assets/images/tree.png')}
                    style={styles.treeImage}
                />

                <CustomText
                    variant='h5'
                    style={styles.msgText}
                    fontFamily='Okra-Medium'
                    color='#fff'
                >
                    Carbon and Plastic Neutral Deliveries in India
                </CustomText>

            </Animated.View>
        </View>
    )
}

export default SplashScreen