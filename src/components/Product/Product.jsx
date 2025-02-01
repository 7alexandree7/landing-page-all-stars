import React from 'react'
import allStar from '../../assets/allStar.png'
import { motion } from 'framer-motion'
import './Product.css'
import { FaArrowLeft, FaArrowRight, FaPlay } from 'react-icons/fa'

const slideUp = (delay) => ({
    hidden: {
        opacity: 0,
        y: 60,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: delay
        }
    }
})

export default function Product() {
    return (
        <section className='product-section'>
            <div className="product-container">
                <div className="brand-info">
                    <div className="brand-text">
                        <motion.h1 className='product-title' initial='hidden' animate='show' variants={slideUp(0.3)}>Chuck Pro Mid</motion.h1>
                        <motion.p initial='hidden' animate='show' variants={slideUp(0.5)}>
                            <h2 className='subtitle-product'>PROJETO MELHORADO</h2>
                            <p className='description'>O All Star Clássico: Um ícone atemporal de estilo e autenticidade, perfeito para qualquer ocasião.
                                Você que ama um Chuck clássico, conheça nossa nova versão em Chuck 70 Vintage.
                                Se você usa um tamanho maior e não encontrou aqui, clique em Tamanhos Grandes.</p>
                            <a className='more-info' href="/mais-informacoes">Mais Informações</a>
                        </motion.p>
                        <motion.div className='size-selection' initial='hidden' animate='show' variants={slideUp(0.7)}>
                            <p className='title-size'>Selecione o seu tamanho</p>
                            <div className="size-options">
                                <p className='size-box'>sm</p>
                                <p className='size-box'>md</p>
                                <p className='size-box'>lg</p>
                                <p className='size-box'>xl</p>
                                <p className='size-box'>8</p>
                                <p className='size-box'>9</p>
                                <p className='size-box'>10</p>
                                <p className='size-box'>11</p>
                                <p className='size-box'>12</p>
                                <p className='size-box'>13</p>
                                <p className='size-box'>14</p>
                                <p className='size-box'>15</p>

                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="container-img-section-product">
                    <motion.img
                        initial={{ opacity: 0, x: 100, rotate: 20 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        src={allStar}
                        alt='imagem de um tenis all star'
                        className='content-img'
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className='play-btn-container'
                    >
                        <a
                            href="https://youtu.be/SD_lvvA4TKw?si=4upXOglnzd02cVS1"
                            target='_blank'
                            className='content-play'
                        ><button className='play-button'><FaPlay /></button>Play Vídeo</a>
                    </motion.div>

                </div>
                <div className="arrow-section">
                    <motion.p className='right-text' variants={slideUp(0.6)} initial='hidden' animate='show'>
                        Criado em 1917 como um tênis de basquete que não escorregava, o All Star foi originalmente promovido
                        pela performance do jogador Chuck Taylor.
                        Porém, ao passar das décadas algo incrível acontece: o sneaker, com seu visual atemporal
                        e seu clássico logo no tornozelo,
                        foi organicamente adotado por rebeldes, artistas, músicos, sonhadores, pensadores e originais.
                        Sua silhueta clássica,
                        o Chuck Taylor All Star está entre os modelos de sneakers mais icônicos de todos os tempos –
                        um símbolo de conforto e autenticidade cultural.
                    </motion.p>
                    <motion.div variants={slideUp(0.9)} initial='hidden' animate='show' className='navigate-icons'>
                        <div className='container-arrow'>
                            <div className='arrow-icon'><FaArrowLeft /></div>
                            <div className='arrow-icon'><FaArrowRight /></div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: 0}}
            className='background-text'
            >
                All Star
            </motion.p>
            <div className="blur-circle"></div>
        </section>
    )
}
